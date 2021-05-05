function resetPage() {
    // Reset the page to before it was unborified

    // Use a try-catch because this won't work on some pages
    // (permissions error)
    try {
        // Inject the rainbow script into the tab
        chrome.tabs.executeScript(null, {
            code: `
            if (_unborify_resetPage != undefined) _unborify_resetPage();
            
            // Delete the reset function so calling it again won't cause errors:

            // This function needs to be declared inline - otherwise it's 'hoisted'
            // by the parser and run before the line above
            var _unborify_resetPage = function() {}            `
        });
    }
    catch {}
}