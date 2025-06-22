chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.message === "background::urlChanged::bild") {
        console.log(`bildContentScript::messageReceived`)

        analyseArticle().then(() => {
            console.log("Article analysed");
        }
        ).catch(err => {
            console.error("Error analysing article:", err);
        });
    }
});

const analyseArticle = async () => {
    // 1️⃣ genau ein <article> erwarten
    const articles = document.getElementsByTagName("article");
    if (articles.length !== 1) {
        console.log("Page contains live-ticker … returning");
        return;
    }

    const article = articles[0];

    // 2️⃣ Überschrift holen
    const headlineElement = article.querySelector("span.headline");
    if (!headlineElement) {
        console.log("No headline found … returning");
        return;
    }
    const headlineText = headlineElement.textContent.trim();
    console.log(`headlineText: ${headlineText}`);

    // 3️⃣ Fließtext einsammeln
    //    a) Haupt-Container finden (hier: .article-body)
    //    b) alle <p>-Elemente darin durchgehen
    //    c) Whitespace bereinigen und zusammenfügen
    let bodyText = "";
    const bodyContainer = article.querySelector("div.article-body");
    if (bodyContainer) {
        bodyText = Array.from(bodyContainer.querySelectorAll("p"))
            .map(p => p.textContent.trim())
            .filter(t => t.length > 0)
            .join(" ");
    } else {
        console.warn("No .article-body found – trying fallback to all paragraphs");
        bodyText = Array.from(article.querySelectorAll("p"))
            .map(p => p.textContent.trim())
            .filter(t => t.length > 0)
            .join(" ");
    }

    // 4️⃣ Headline + Body kombinieren
    const concatenatedText = `${headlineText} ${bodyText}`;
    console.log(`concatenatedText length: ${concatenatedText.length}`);
    console.log(`concatenatedText : ${concatenatedText}`);

    // 5️⃣ Klassifizieren
    try {
        const data = await globalThis.classifyArticle(concatenatedText);
        appendDataToDOM(data, article);
    } catch (err) {
        console.error("Error fetching data:", err);
    }
};


const appendDataToDOM = (data, article) => {
  // ▸ Message bauen
  const prozent = (data.probability * 100).toFixed(2);
  const text    = `Der Artikel ist zu einer Wahrscheinlichkeit von ${prozent}% ` +
                  (data.label === 1 ? "fake." : "echt.");

  let container = document.getElementById("analyse-container");
  if (!container) {
    container        = document.createElement("div");
    container.id     = "analyse-container";
    article.parentNode.insertBefore(container, article);
  }

  let p = document.getElementById("analyse-paragraph");
  if (!p) {
    p      = document.createElement("p");
    p.id   = "analyse-paragraph";
    container.appendChild(p);
  }
  p.textContent = text;
};
