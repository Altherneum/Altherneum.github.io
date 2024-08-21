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

function SwitchYouTubeLoop() {
    Switcher("YouTubeLoop");
}

function Switcher(name) {
    var checkbox = document.getElementById(name);
    var state = checkbox.checked;
    localStorage.setItem(name, state);
    console.info("set " + name + " to " + state)
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
} loadSettingsSwitch();