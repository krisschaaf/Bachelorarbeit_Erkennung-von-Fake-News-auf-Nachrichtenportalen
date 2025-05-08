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

    console.log(`headlineText: ${headlineText}`);
    
    if (headlineText === "") {
        console.log("No headline found...returning")
        return;
    }

    await globalThis.fetchDataTest().then(data => {
        appendDataToDOM(data, headlineText, article);
    }).catch(err => {
        console.error("Error fetching data:", err);
    }
    );
}

const appendDataToDOM = (data, headlineText, article) => {
    if (!document.getElementById("analyse-container")) {
        console.log("Container not found, creating new one");

        const container = document.createElement("div");
        container.id = "analyse-container";

        const p = document.createElement("p");
        p.textContent = `${headlineText} and ${JSON.stringify(data)}`;
        p.id = "analyse-paragraph";

        container.appendChild(p);
        article.parentNode.insertBefore(container, article);
    }
}

//   const async postArticle = (headlineText) => {
//     const data = {};
//     try {
//         const res = await fetch("http://localhost:4000/test", {
//             method: "POST",
//             headers: { "Accept": "application/json" },
//             body: JSON.stringify({ headline: headlineText })
//         });
//         data = await res.json();
//         console.log("Response data:", data);
//     } catch (err) {
//         console.error("Fehler beim Abrufen der Daten:", err);
//     }
//     return data;
//   }