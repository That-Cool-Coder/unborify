

function makeRainbow() {
    // Make everything on the current tab rainbow colored

    // Use a try-catch because this won't work on some pages
    // (permissions error)
    try {
        // Inject the rainbow script into the tab
        chrome.tabs.executeScript(null, {
            code: `
            if (unborifyInterval != undefined) clearInterval(unborifyInterval);

            var propertiesToMakeRainbow = [
                'color', 'backgroundColor', 'borderColor'
            ];
            
            function randomHexColor() {
                return '#'+ Math.floor(Math.random()*16777215).toString(16);
            }
    
            var allElements = [...document.querySelectorAll('*')];
            allElements.forEach(elem => {
                propertiesToMakeRainbow.forEach(property => {
                    elem.style[property] = randomHexColor();
                });
            });`
        });
    }
    catch {}
}