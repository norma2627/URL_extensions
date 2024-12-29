document.getElementById('copyButton').addEventListener('click', () => {
    browser.runtime.sendMessage({action: "copuURLs"}).then(response => {
        const urls = response.urls.join('\n');
        navigator.clipboard.writeText(urls).then(() => {
            alert('Copied URLs to the clipborad')
        })
    })
})

