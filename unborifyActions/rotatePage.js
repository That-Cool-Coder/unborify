const minRotateSpeed = -7;
const maxRotateSpeed = 7;

function rotatePage() {
    // Use a try-catch because this won't work on some pages
    // (permissions error)
    try {
        // Inject the rotate script into the tab
        chrome.tabs.executeScript(null, {
            code: `
            if (_unborify_resetPage != undefined) _unborify_resetPage();

            // This function needs to be declared inline - otherwise it's 'hoisted'
            // by the parser and run before the line above
            var _unborify_resetPage = function() {
                clearInterval(_unborify_interval);
                document.body.style.transform = _unborify_previousTransform;
            }

            // Save the transform before changing it so it can be reverted
            var _unborify_previousTransform = document.body.style.transform;

            var _unborify_rotateSpeed = ${wrk.randflt(minRotateSpeed, maxRotateSpeed)};
            var _unborify_rotation = 0;
            var _unborify_interval = setInterval(() => {
                _unborify_rotation += _unborify_rotateSpeed;
                document.body.style.transform = 'rotateZ(' + _unborify_rotation + 'deg)';
            }, 50);
            `
        });
    }
    catch {}
}