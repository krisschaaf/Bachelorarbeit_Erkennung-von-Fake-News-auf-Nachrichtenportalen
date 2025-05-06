function analyseArticle() {
    const articles = document.getElementsByTagName("article");
  
    if (articles.length === 1) {
      const article = articles[0];
  
      if (!document.getElementById("analyse-container")) {
        const container = document.createElement("div");
        container.id = "analyse-container";
      
        const p = document.createElement("p");
        p.textContent = "Der Artikel wird analysiert...";
        p.id = "analyse-paragraph";
      
        container.appendChild(p);
      
        article.parentNode.insertBefore(container, article);
      }
      
    }
  }
  
  analyseArticle();
  
  // Beobachte DOM-Änderungen für SPA-Seiten
  const observer = new MutationObserver(() => {
    analyseArticle();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  