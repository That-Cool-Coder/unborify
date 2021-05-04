
function invertColors() {
    // Use a try-catch because this won't work on some pages
    // (permissions error)
    try {
        // Inject the invert script into the tab
        chrome.tabs.executeScript(null, {
            code: `
            if (_unborify_resetPage != undefined) _unborify_resetPage();
            
            // This function needs to be inline - otherwise it's 'hoisted'
            // by the parser and run before the line above
            var _unborify_resetPage = function() {
                _unborify_style.parentElement.removeChild(_unborify_style)
            }

            var _unborify_css = 'html {-webkit-filter: invert(100%);' +
                '-moz-filter: invert(100%);' + '-o-filter: invert(100%);' +
                '-ms-filter: invert(100%); }';
            var _unborify_head_element = document.getElementsByTagName('head')[0];
            var _unborify_style = document.createElement('style');
            _unborify_style.innerHTML = _unborify_css;

            _unborify_head_element.appendChild(_unborify_style);
            `
        })
    }
    catch {}
}

