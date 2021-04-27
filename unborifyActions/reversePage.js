function reversePage() {
    // Use a try-catch because this won't work on some pages
    // (permissions error)
    try {
        // Inject the reverse script into the tab
        chrome.tabs.executeScript(null, {
            code: `
            if (unborifyInterval != undefined) clearInterval(unborifyInterval);
            document.body.style.transform = 'scaleX(-1)';
            `
        });
    }
    catch {}
}