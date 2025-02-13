function resetLocalStorage() {
    localStorage.clear();
    location.reload();
}

function resetWebSiteStorage() {
    localStorage.removeItem("theme");
    location.reload();
}

function SwitchViewCount() {
    Switcher("viewCount");
}

function SwitchDevMode() {
    Switcher("devMode");
}

function SwitchCursor() {
    Switcher("customCursor");
    getCursorSetting();
}

function SwitchGranted() {
    Switcher("Granted");
}

function SwitchOldSearchBar() {
    Switcher("OldSearchBar");
}

function SwitchAllSearchBar() {
    Switcher("AllSearchBar");
}

function SwitchYouTubeLoop() {
    Switcher("YouTubeLoop");
}

function SwitchErrorLogging() {
    Switcher("ErrorLogging");
}

function SwitchWarningLogging() {
    Switcher("WarningLogging");
}

function SwitchAllLogs() {
    Switcher("AllLogs");
}

function SwitchVisitedLogs() {
    Switcher("VisitedLogs");
}

function SwitchLogLogging() {
    Switcher("LogLogging");
}

function Switcher(name) {
    var checkbox = document.getElementById(name);
    var state = checkbox.checked;
    localStorage.setItem(name, state);
    console.log("set " + name + " to " + state)
}

function setSwitch(name, defaultTrue) {
    var checkbox = document.getElementById(name);
    var state = localStorage.getItem(name);
    if (state === 'true') {
        checkbox.checked = true;
    }
    else if (state === false) {
        //nothing check box at false state by default
    }
    else if ((defaultTrue && state === undefined) || (defaultTrue && state === null)) {
        checkbox.checked = true;
    }
}

function loadSettingsSwitch() {
    setSwitch("devMode", false);
    setSwitch("viewCount", true);
    setSwitch("customCursor", true);
    setSwitch("Granted", false);
    setSwitch("YouTubeLoop", true);
    setSwitch("OldSearchBar", true);
    setSwitch("AllSearchBar", true);
    setSwitch("LogLogging", false);
    setSwitch("WarningLogging", true);
    setSwitch("ErrorLogging", true);
    setSwitch("VisitedLogs", false);
    setSwitch("AllLogs", false);
}