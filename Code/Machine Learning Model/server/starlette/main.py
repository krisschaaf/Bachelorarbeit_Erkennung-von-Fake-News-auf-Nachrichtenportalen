from starlette.applications import Starlette
from starlette.responses import JSONResponse
from starlette.routing import Route
from transformers import pipeline, TFAutoModelForSequenceClassification, AutoTokenizer
import asyncio
import os


async def homepage(request):
    payload = await request.body()
    string = payload.decode("utf-8")
    response_q = asyncio.Queue()
    await request.app.model_queue.put((string, response_q))
    output = await response_q.get()
    return JSONResponse(output)


async def server_loop(q):
    access_token = os.getenv("ACCESS_TOKEN_HUGGING_FACE")
    model = TFAutoModelForSequenceClassification.from_pretrained("krisschaaf/yelp_review_full_bert", token=access_token)
    tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")

    pipe = pipeline("text-classification", model=model, tokenizer=tokenizer)
    while True:
        (string, response_q) = await q.get()
        out = pipe(string)
        await response_q.put(out)


app = Starlette(
    routes=[
        Route("/", homepage, methods=["POST"]),
    ],
)


@app.on_event("startup")
async def startup_event():
    q = asyncio.Queue()
    app.model_queue = q
    asyncio.create_task(server_loop(q))