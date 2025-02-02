var warnCount = 0;
var warnMsg = "";
console.warn = async function (msg) {
    warnCount++;
    warnMsg = msg;
    await statsConsoleInfo(msg, warnCount, "Warn");
    console.log(msg);
}

var errorCount = 0;
var errorMsg = "";
console.error = async function (msg) {
    errorCount++;
    errorMsg = msg;
    await statsConsoleInfo(msg, errorCount, "Error");
    console.log(msg);
}

var infoCount = 0;
var infoMsg = "";
console.log = async function (msg) {
    infoCount++;
    infoMsg = msg;
    await statsConsoleInfo(msg, infoCount, "Info");
    console.log(msg);
}

var traceCount = 0;
var traceMsg = "";
console.trace = async function (msg) {
    traceCount++;
    traceMsg = msg;
    await statsConsoleInfo(msg, traceCount, "Trace");
    console.log(msg);
}

var logsCount = 0;
var logsMsg = "";
console.log = async function (msg) {
    logsCount++;
    logsMsg = msg;
    await statsConsoleInfo(msg, logsCount, "Log");
    console.dir(msg);
}

var messages;
async function statsConsoleInfo(msg, count, text) {
    if (msg === undefined) {
        msg = "...";
    }
    if (count === undefined) {
        count = 0;
    }

    if (text === undefined) {
        text = "ErrorType";
    }

    var textOutput = "\n\n" + count + " : " + text + " : \n" + msg;
    messages += textOutput;

    var testDoc = document.getElementById("statsContentConsoleInfoAll");
    if (testDoc !== null && testDoc !== undefined){
        testDoc.value = messages;
        testDoc.scrollTop = testDoc.scrollHeight;
    }

    SendToLog(text, textOutput);
}

function SendToLog(text, textOutput){
    if(text === "Error" || text === "ErrorType")
    {
        if (localStorage.getItem('ErrorLogging') === "false") {
            return;
        }
    }
    else if(text === "Warn")
    {
        if (localStorage.getItem('WarningLogging') === "false") {
            return;
        }
    }
    else if(text === "Index.JS"){}
    else
    {
        if (localStorage.getItem('AllLogs') !== "true") {
            return;
        }
    }

    try {
        GetData(textOutput); 
    } catch (error) {
        console.log(error);
    }
}

async function GetData(text) {
    await fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => sendToWebHook("1332057163564191974", "O34H4kQUU35omVFuEs1JBqiFh9d4G2uUlLFeOl5lpdL2vjfqhCJ9zHpr3XnfjvgJmdd2", "⬆️\n\n\n`" + data.ip + "` sur `" + getShortPathname() + "`\nSur `" + navigator.userAgentData.platform + "` `" + navigator.vendor + "/" + navigator.userAgentData.brands[1].brand + "` `lang:" + navigator.language + "` `mobile:" + navigator.userAgentData.mobile + "`\n`" + window.navigator.userAgent + "`\n```\n" + text + "```\n\n⬇️", "POST"));
}

function addConsoleInfoOnAnchor() {
    console.log("start adding anchor console info");
    var anchor = document.getElementById("anchor-button");

    var button = document.createElement("button");
    button.onclick = function () { showMenu('statsContentConsoleInfo'); }

    var img = document.createElement("img");
    img.src = "/assets/svg/console.svg";
    img.classList.add("svg");

    button.appendChild(img);
    anchor.appendChild(button);
}