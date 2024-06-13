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

function Switcher(name) {
    var checkbox = document.getElementById(name);
    var state = checkbox.checked;
    localStorage.setItem(name, state);
    console.log("set " + name + " to " + state)
}

function setSwitch(name) {
    var checkbox = document.getElementById(name);
    var state = localStorage.getItem(name);
    if (state === 'true') {
        checkbox.checked = true;
    }
}

function loadSettingsSwitch() {
    setSwitch("devMode");
    setSwitch("viewCount");
} loadSettingsSwitch();