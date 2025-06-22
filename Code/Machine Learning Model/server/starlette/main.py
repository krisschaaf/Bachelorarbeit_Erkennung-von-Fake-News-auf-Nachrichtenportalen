# main.py
import os
import asyncio
from typing import Tuple, Any

import torch
import numpy as np
from transformers import AutoModel, AutoTokenizer

from starlette.applications import Starlette
from starlette.routing import Route
from starlette.responses import JSONResponse

HF_MODEL_ID = "krisschaaf/xml-roberta-base-fake-news-german"
HF_TOKEN     = os.getenv("ACCESS_TOKEN_HUGGING_FACE")  # or None for public models


# ----------  model service ----------------------------------------------------
class EmbeddingService:
    """
    Handles one-time model download / warm-up and makes sure it is ready
    before the rest of the app tries to use it.
    """
    def __init__(self) -> None:
        self._ready = asyncio.Event()
        self.model:  AutoModel     | None = None
        self.tok:    AutoTokenizer | None = None

    # ---- public API ---------------------------------------------------------
    async def startup(self) -> None:
        """Download weights, allocate on the right device, run one dummy pass."""
        loop = asyncio.get_running_loop()

        # put the blocking HF download on a worker thread so the loop stays alive
        self.model, self.tok = await loop.run_in_executor(
            None, self._load_model_and_tokenizer
        )

        # (optional) warm-up – one dummy forward pass so first real request is fast
        dummy = self.tok("warm up", return_tensors="pt", truncation=True)
        self._get_embedding(dummy)        # discard result

        self._ready.set()                 # <-- signal we are good to go

    async def embed_text(self, text: str) -> np.ndarray:
        """
        Waits until the model is ready, then returns the embedding
        (last 4-layer mean-pooled representation).
        """
        await self._ready.wait()

        tokenized = self.tok(
            text,
            truncation=True,
            padding="max_length",
            max_length=self.tok.model_max_length,
            return_tensors="pt",
        )
        return self._get_embedding(tokenized)

    @property
    def ready(self) -> bool:
        return self._ready.is_set()

    # ---- helpers ------------------------------------------------------------
    @staticmethod
    def _load_model_and_tokenizer() -> Tuple[AutoModel, AutoTokenizer]:
        model = AutoModel.from_pretrained(HF_MODEL_ID, token=HF_TOKEN)
        tok   = AutoTokenizer.from_pretrained(HF_MODEL_ID, token=HF_TOKEN)
        return model, tok

    def _get_embedding(self, tokenized: Any) -> np.ndarray:
        """
        Implementation identical to your `get_embedding_from_tokenized_text`,
        condensed for brevity.
        """
        device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        self.model.to(device).eval()

        with torch.no_grad():
            out = self.model(
                **{k: v.to(device) for k, v in tokenized.items()},
                output_hidden_states=True,
            )
            # average last 4 layers, then mean-pool over the token dimension
            hidden = torch.stack(out.hidden_states[-4:]).mean(0)  # [B,T,H]
            mask   = tokenized["attention_mask"].unsqueeze(-1).to(device)
            sent   = (hidden * mask).sum(1) / mask.sum(1).clamp(min=1e-9)
            return sent.cpu().numpy().squeeze()


service = EmbeddingService()


# ----------  web end-points ---------------------------------------------------
async def homepage(request):
    if not service.ready:
        return JSONResponse({"detail": "Starting server"}, status_code=503)

    text = (await request.body()).decode("utf-8")
    emb  = await service.embed_text(text)
    # For demo purposes we cast to list so it is JSON-serialisable
    return JSONResponse({"embedding": emb.tolist()})


# ----------  Starlette app ----------------------------------------------------
app = Starlette(routes=[Route("/", homepage, methods=["POST"])])


@app.on_event("startup")
async def app_startup() -> None:
    # Run the blocking download in the background *but* don’t accept traffic
    # until the EmbeddingService reports ready.
    asyncio.create_task(service.startup())
