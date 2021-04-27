const minRotateSpeed = -7;
const maxRotateSpeed = 7;

function rotatePage() {
    // Use a try-catch because this won't work on some pages
    // (permissions error)
    try {
        // Inject the rotate script into the tab
        chrome.tabs.executeScript(null, {
            code: `
            if (unborifyInterval != undefined) clearInterval(unborifyInterval);
            var rotateSpeed = ${wrk.randflt(minRotateSpeed, maxRotateSpeed)};
            var rotation = 0;
            var unborifyInterval = setInterval(() => {
                rotation += rotateSpeed;
                document.body.style.transform = 'rotateZ(' + rotation + 'deg)';
            }, 50);
            `
        });
    }
    catch {}
}