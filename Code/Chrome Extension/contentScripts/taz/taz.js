chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.message === "background::urlChanged::taz") {
        console.log(`tazContentScript::messageReceived`)

        analyseArticle().then(() => {
            console.log("Article analysed");
        }
        ).catch(err => {
            console.error("Error analysing article:", err);
        });
    }
});

const analyseArticle = async () => {
    const articles = document.getElementsByTagName("article");

    if (articles.length !== 1) {
        console.log("Article contains live-ticker...returning")
        return;
    };

    const article = articles[0];
    
    var headlineText = "";
    article.querySelectorAll("span.headline").forEach((headline) => {
        headlineTrimmed = headline.textContent.trim() ?? "";
        if (headlineTrimmed !== "") {
            headlineText += headlineTrimmed + "; ";
        }
    })

    let subtitleText = "";
    article.querySelectorAll("p.typo-r-subline-detail").forEach((subtitle) => {
        subtitleTrimmed = subtitle.textContent.trim() ?? "";
        if (subtitleTrimmed !== "") {
            subtitleText += subtitleTrimmed + "; ";
        }
    });

    let bodyText = "";
    article.querySelectorAll("p.bodytext.paragraph.typo-bodytext").forEach(p => {
        const text = p.textContent.trim();
        if (text.length > 0) {
            bodyText += text + " ";
        }
    });

    const concatenatedText = `${headlineText} ${subtitleText} ${bodyText}`.trim();

    console.log(`headlineText: ${headlineText}`);
    console.log(`subtitleText: ${subtitleText}`);
    console.log(`bodyText: ${bodyText}`);
    console.log(`concatenatedText: ${concatenatedText}`);
    
    if (headlineText === "") {
        console.log("No headline found...returning")
        return;
    }

    try {
        const data = await globalThis.classifyArticle(headlineText);
        appendDataToDOM(data, article);
    } catch (err) {
        console.error("Error fetching data:", err);
    }
}

const appendDataToDOM = (data, article) => {
  const probability = parseFloat(data.probability);
  const prozent = !isNaN(probability) ? (probability * 100).toFixed(2) : "0.00";
  const text = `Der Artikel ist zu einer Wahrscheinlichkeit von ` +
                 (data.label === 1 ? `${prozent}%` : `${(100 - prozent).toFixed(2)}%`) +
               (data.label === 1 ? " fake." : " echt.");

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
