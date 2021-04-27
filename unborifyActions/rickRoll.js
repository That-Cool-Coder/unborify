const rickRollUrl = 'https://storage.calbabreaker.repl.co/secret.mp4';

function rickRoll() {
    chrome.tabs.create({url : rickRollUrl});
}