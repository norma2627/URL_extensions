document.getElementById('copyButton').addEventListener('click', () => {
    browser.runtime.sendMessage({ action: "copyURLs" }).then(response => {
        const tabData = response.urls.join('\n');
        navigator.clipboard.writeText(tabData).then(() => {
            alert('Copied titles and URLs to the clipboard');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
});
