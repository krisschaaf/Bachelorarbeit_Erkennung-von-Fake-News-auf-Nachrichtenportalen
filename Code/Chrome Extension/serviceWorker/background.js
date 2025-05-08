chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url.match('https:\/\/.*.bild.de\/.*') && changeInfo.status === 'complete') {
        chrome.tabs.sendMessage(tabId, {
            message: "background::urlChanged::bild",
        })
        console.log(`${tab.url} is the new URL from tabId ${tabId}`);
    } else if (tab.url.match('https:\/\/taz.de\/.*') && changeInfo.status === 'complete') {
        chrome.tabs.sendMessage(tabId, {
            message: "background::urlChanged::taz",
        })
        console.log(`${tab.url} is the new URL from tabId ${tabId}`);
    }
}
);
