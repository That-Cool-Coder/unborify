var lastUpdate = new Date().getTime();

// If no settings are found then these are set as the settings
var settings = {
    activated : true,
    hasVisitedBefore : true,
    updateIntervalSize : 5,
    updateIntervalUnits : 60000 // minutes
}

function loadSettings() {
    chrome.storage.sync.get(data => {
        if (data.hasVisitedBefore) settings = data;
        else {
            chrome.storage.sync.set(settings);
        }
    });
}

var mainInterval = setInterval(() => {
    loadSettings();

    if (settings.activated) {
        if (new Date().getTime() - lastUpdate >
            settings.updateIntervalSize * settings.updateIntervalUnits) {
            
            var action = wrk.arr.choose(unborifyActions);
            console.log(action.name);
            action();

            lastUpdate = new Date().getTime();
        }
    }
}, 500);