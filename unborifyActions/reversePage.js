function reversePage() {
    // Use a try-catch because this won't work on some pages
    // (permissions error)
    try {
        // Inject the reverse script into the tab
        chrome.tabs.executeScript(null, {
            code: `
            if (window._unborify_resetPage != undefined) _unborify_resetPage();
            
            // This function needs to be inline - otherwise it's 'hoisted'
            // by the parser and run before the line above
            var _unborify_resetPage = function() {
                document.body.style.transform = _unborify_previousTransform;
            }

            // Save the transform before changing it so it can be reverted
            var _unborify_previousTransform = document.body.style.transform;
            document.body.style.transform = 'scaleX(-1)';

            `
        });
    }
    catch {}
}