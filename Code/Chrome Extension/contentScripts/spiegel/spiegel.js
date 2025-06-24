chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.message === "background::urlChanged::spiegel") {
        console.log(`spiegelContentScript::messageReceived`)

        analyseArticle().then(() => {
            console.log("Article analysed");
        }
        ).catch(err => {
            console.error("Error analysing article:", err);
        });
    }
});

const analyseArticle = async () => {
    const article = document.querySelector("article.bg-white");
    if (!article) {
        console.log("No article found… returning");
        return;
    }

    // 🔹 Überschrift 1 (z.B. Rubrik oder Einleitung)
    let subtitle = "";
    const subtitleEl = article.querySelector("h2 span.text-base");
    if (subtitleEl) {
        subtitle = subtitleEl.textContent.trim();
    }

    // 🔹 Haupttitel
    let mainTitle = "";
    const titleEl = article.querySelector("h2 span.font-extrabold");
    if (titleEl) {
        mainTitle = titleEl.textContent.trim();
    }

    // 🔹 Zusatz/Unterschrift
    let signature = "";
    const signatureEl = article.querySelector("div.font-sansUI");
    if (signatureEl) {
        signature = signatureEl.textContent.trim();
    }

    const headlineText = `${subtitle} ${mainTitle} ${signature}`.trim();

    // 🔹 Bodytext aus dem data-article-el="body" Bereich
    let bodyText = "";
    const bodyContainer = document.querySelector('div[data-article-el="body"]');
    if (bodyContainer) {
        bodyText = Array.from(bodyContainer.querySelectorAll("div.RichText p"))
            .map(p => p.textContent.trim())
            .filter(text => text.length > 0)
            .join(" ");
    } else {
        console.warn("No body container found");
    }

    const concatenatedText = `${headlineText} ${bodyText}`.trim();

    console.log(`headlineText: ${headlineText}`);
    console.log(`bodyText: ${bodyText}`);
    console.log(`concatenatedText: ${concatenatedText}`);

    if (concatenatedText === "") {
        console.log("No content found...returning");
        return;
    }

    try {
        const data = await globalThis.classifyArticle(concatenatedText);
        appendDataToDOM(data, article);
    } catch (err) {
        console.error("Error fetching data:", err);
    }
};



const appendDataToDOM = (data, article) => {
  const prozent = (data.probability * 100).toFixed(2);
  const text    = `Der Artikel ist zu einer Wahrscheinlichkeit von ${prozent}% ` +
                  (data.label === 1 ? "fake." : "echt.");

  let container = document.getElementById("analyse-container");
  if (!container) {
    container        = document.createElement("div");
    container.id     = "analyse-container";
    article.parentNode.insertBefore(container, article);
  }

  // Apply styles based on the label
  if (data.label === 1) {
    container.style.borderColor = "red";
    container.style.backgroundColor = "#fff0f0";
  } else {
    container.style.borderColor = "green";
    container.style.backgroundColor = "#f0fff0";
  }

  let p = document.getElementById("analyse-paragraph");
  if (!p) {
    p      = document.createElement("p");
    p.id   = "analyse-paragraph";
    container.appendChild(p);
  }

  p.textContent = text;

  // Apply text color based on label
  p.style.color = data.label === 1 ? "red" : "green";
};
