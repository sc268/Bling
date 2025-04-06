// Fetch background image from Bing
chrome.runtime.sendMessage({ type: 'fetch-bing' }, (response) => {
  if (response?.error) {
    console.error("Failed to fetch Bing image:", response.error);
    return;
  }

  const pics = response;
  const max = pics.images.length;
  const pic = pics.images[Math.floor(Math.random() * max)];

  document.body.style.backgroundImage = `url(https://bing.com${pic.url})`;

  const copyrightEl = document.getElementById("copyright");
  if (copyrightEl) {
    copyrightEl.innerHTML += `<a href="${pic.copyrightlink}">${pic.copyright}</a>`;
  }
});

// Track page view
chrome.runtime.sendMessage({ type: 'track-ga' });
