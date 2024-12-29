browser.runtime.onMessage.addListener((message, sender, sendResponse) =>
{
    if (message.action === "copyURLs") {
        browser.tabs.query({}).then((tabs) => {
            const tabData = tabs.map(tab => `${tab.title}\n${tab.url}\n`);
            sendResponse({ urls: tabData });
        });
    }
    return true;
});
