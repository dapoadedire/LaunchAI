const AIWebsites = {
    "Claude.AI": { url: "https://claude.ai", icon: "https://claude.ai/favicon.ico" },
    ChatGPT: { url: "https://chatgpt.com", icon: "https://chatgpt.com/favicon.ico" },
    Deepseek: { url: "https://chat.deepseek.com", icon: "https://www.deepseek.com/favicon.ico" },
    Gemini: { url: "https://gemini.google.com", icon: "https://cdn.simpleicons.org/googlegemini" },
    "Perplexity.AI": { url: "https://www.perplexity.ai", icon: "https://www.perplexity.ai/favicon.ico" },
    Grok: { url: "https://grok.com", icon: "https://x.ai/favicon.ico" },
  };
  
  const popupLinks = document.querySelector(".popup-links");
  
  for (const [name, { url, icon }] of Object.entries(AIWebsites)) {
    const button = document.createElement("button");
    button.classList.add("ai-button");
    
    const img = document.createElement("img");
    img.src = icon;
    img.alt = `${name} icon`;
    img.classList.add("ai-icon");
  
    const span = document.createElement("span");
    span.textContent = name;
    
    button.appendChild(img);
    button.appendChild(span);
    
    button.addEventListener("click", () => {
      chrome.tabs.query({ url: `${url}/*` }, (tabs) => {
        if (tabs.length > 0) {
          tabs.sort((a, b) => b.lastAccessed - a.lastAccessed);
          chrome.tabs.update(tabs[0].id, { active: true });
        } else {
          chrome.tabs.create({ url });
        }
      });
    });
  
    popupLinks.appendChild(button);
  }