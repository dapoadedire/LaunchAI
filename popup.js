const AIWebsites = {
    ChatGPT: "https://chat.openai.com",
    Gemini: "https://gemini.google.com",
    Mistral: "https://chat.mistral.ai",
    "Claude.ai": "https://claude.ai",
    "Bing AI": "https://www.bing.com/chat",
};

const popupLinks = document.querySelector(".popup-links");

for (const [name, url] of Object.entries(AIWebsites)) {
    const button = document.createElement("button");
    button.textContent = name;
    button.addEventListener("click", () => {
        chrome.tabs.query({ url }, (tabs) => {
            chrome.tabs.create({ url });
        });
    });
    popupLinks.appendChild(button);
}
