function copyAllTabURLs() {
    return browser.tabs.query({}).then(tabs => {
        return tabs.map(tab => tab.url);
    });
}
browser.runtime.onMessage.addListener((message, sender, sendResponse) =>
{
    if (message.action === "copuURLs") {
        copyAllTabURLs().then(urls =>{
            sendResponse({urls: urls});
        });
        return true;
    }
});