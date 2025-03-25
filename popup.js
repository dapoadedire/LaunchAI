const AIWebsites = {
  ChatGPT: "https://chat.openai.com",
  Gemini: "https://gemini.google.com",
  "Mistral.AI": "https://chat.mistral.ai/chat",
  "Claude.AI": "https://claude.ai",
  "Bing AI": "https://www.bing.com/chat",
  "Perplexity.AI": "https://www.perplexity.ai",
};

const popupLinks = document.querySelector(".popup-links");

for (const [name, url] of Object.entries(AIWebsites)) {
  const button = document.createElement("button");
  button.textContent = name;
  button.addEventListener("click", () => {
    chrome.tabs.query({ url: `${url}/*` }, (tabs) => {
      if (tabs.length > 0) {
        // If tab is found, switch to it
        chrome.tabs.update(tabs[0].id, { active: true });
      } else {
        // If no tab is found, create a new one
        chrome.tabs.create({ url });
      }
    });
  });
  popupLinks.appendChild(button);
}
