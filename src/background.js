chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'fetch-bing') {
    fetch('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=30')
      .then(res => res.json())
      .then(data => sendResponse(data))
      .catch(err => sendResponse({ error: err.toString() }));
    return true; // keep the message channel open
  }
});

const GA_MEASUREMENT_ID = 'G-T1M784WBW1';
const API_SECRET = 'LKnu5mdnRqiUUDRLVtaa5g'; // Replace with your actual Measurement Protocol API secret

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'fetch-bing') {
    fetch('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=30')
      .then(res => res.json())
      .then(data => sendResponse(data))
      .catch(err => sendResponse({ error: err.toString() }));
    return true;
  }

  if (message.type === 'track-ga') {
    const clientId = crypto.randomUUID(); // you could persist this if needed
    const payload = {
      client_id: clientId,
      events: [{
        name: "page_view",
        params: {
          page_title: "New Tab",
          page_location: "chrome-extension://newtab"
        }
      }]
    };

    fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${API_SECRET}`, {
      method: 'POST',
      body: JSON.stringify(payload),
    }).then(() => {
      console.log("GA4 event sent");
    }).catch(err => {
      console.error("GA4 error:", err);
    });
  }
});
