

function makeRainbow() {
    // Make everything on the current tab rainbow colored

    // Use a try-catch because this won't work on some pages
    // (permissions error)
    try {
        // Inject the rainbow script into the tab
        chrome.tabs.executeScript(null, {
            code: `
            if (_unborify_resetPage != undefined) _unborify_resetPage();
            
            // This function needs to be inline - otherwise it's 'hoisted'
            // by the parser and run before the line above
            var _unborify_resetPage = function() {
                for (var elem of _unborify_initialElementStyles) {
                    for (var key in elem.style) {
                        elem.element.style[key] = elem.style[key];
                    }
                }
            }

            var propertiesToMakeRainbow = [
                'color', 'backgroundColor', 'borderColor'
            ];
            
            function randomHexColor() {
                return '#'+ Math.floor(Math.random()*16777215).toString(16);
            }
    
            var _unborify_initialElementStyles = [];

            ([...document.querySelectorAll('*')]).forEach((elem, i) => {
                var crntElementStyle = {element : elem, style : {}}
                propertiesToMakeRainbow.forEach(property => {
                    // Save the original style data so we can reset
                    crntElementStyle.element.style[property] =
                        window.getComputedStyle(elem, null).getPropertyValue(property);
                    
                    elem.style[property] = randomHexColor();
                });
                _unborify_initialElementStyles.push(crntElementStyle);
            });
            `
        });
    }
    catch {}
}