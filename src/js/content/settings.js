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

function SwitchSearchBarList() {
    Switcher("SearchBarList");
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

function SwitchOpenAllChapter() {
    Switcher("OpenAllChapter");
}

function SwitchCloseOnOpen() {
    Switcher("CloseOnOpen");
}

function SwitchTitre2() {
    Switcher("Titre2");
}

function SwitchTitre3Plus() {
    Switcher("Titre3Plus");
}

function Switcher(name) {
    var checkbox = document.getElementById(name);
    var state = checkbox.checked;
    localStorage.setItem(name, state);
    console.log("set " + name + " to " + state)
    setSwitch(name, null);
}

function setSwitch(name, defaultTrue) {
    var checkbox = document.getElementById(name);
    var state = localStorage.getItem(name);
    
    if(state === undefined || state === null){
        if (defaultTrue) {
            checkbox.indeterminate = true;
            checkbox.className += "defaultTrue";
        }
        if (!defaultTrue) {
            checkbox.indeterminate = true;
            checkbox.className += "defaultFalse";
        }
    }
    else {
        checkbox.className -= "defaultFalse";
        checkbox.className -= "defaultTrue";
        if (state === 'true') {
            checkbox.checked = true;
        }
        else if (state === false) {
            checkbox.checked = false;
        }
    }
}

function loadSettingsSwitch() {
    setSwitch("devMode", false);
    setSwitch("viewCount", true);
    setSwitch("customCursor", true);
    setSwitch("Granted", false);
    setSwitch("YouTubeLoop", false);
    setSwitch("OldSearchBar", false);
    setSwitch("SearchBarList", true);
    setSwitch("AllSearchBar", false);
    setSwitch("LogLogging", false);
    setSwitch("WarningLogging", false);
    setSwitch("ErrorLogging", false);
    setSwitch("VisitedLogs", true);
    setSwitch("AllLogs", false);
    setSwitch("OpenAllChapter", true);
    setSwitch("CloseOnOpen", false);
    setSwitch("Titre2", true);
    setSwitch("Titre3Plus", true);
}