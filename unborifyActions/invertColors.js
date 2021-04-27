
function invertColors() {
    // Use a try-catch because this won't work on some pages
    // (permissions error)
    try {
        // Inject the invert script into the tab
        chrome.tabs.executeScript(null, {
            code: `
            if (unborifyInterval != undefined) clearInterval(unborifyInterval);
            var css = 'html {-webkit-filter: invert(100%);' +
                '-moz-filter: invert(100%);' + '-o-filter: invert(100%);' +
                '-ms-filter: invert(100%); }';
            var head = document.getElementsByTagName('head')[0];
            var style = document.createElement('style');

            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            }
            else {
                style.appendChild(document.createTextNode(css));
            }
            head.appendChild(style);
            `
        })
    }
    catch {}
}

