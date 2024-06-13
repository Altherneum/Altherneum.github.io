var warnCount = 0;
var warnMsg = "";
console.warn = async function (msg) {
    warnCount++;
    warnMsg = msg;
    await statsConsoleInfo( msg, warnCount, "statsContentConsoleInfoWarn", "Warn");
    console.log(msg);
}

var errorCount = 0;
var errorMsg = "";
console.error = async function (msg) {
    errorCount++;
    errorMsg = msg;
    await statsConsoleInfo( msg, errorCount, "statsContentConsoleInfoError", "Error");
    console.log(msg);
}

var infoCount = 0;
var infoMsg = "";
console.info = async function (msg) {
    infoCount++;
    infoMsg = msg;
    await statsConsoleInfo( msg, infoCount, "statsContentConsoleInfoInfo", "Info");
    console.log(msg);
}

var traceCount = 0;
var traceMsg = "";
console.trace = async function (msg) {
    traceCount++;
    traceMsg = msg;
    await statsConsoleInfo( msg, traceCount, "statsContentConsoleInfoTrace", "Trace");
    console.log(msg);
}

async function statsConsoleInfo(msg, count, div, text) {
        if (div !== undefined) {
            if (msg === undefined) {
                msg = "...";
            }
            if (count === undefined) {
                count = 0;
            }

            if (text === undefined) {
                text = "ErrorType";
            }

            var countInfo = document.getElementById(div);
            if(countInfo !== null){
                var textOutput = text + " : " + count + " : " + msg;

                countInfo.textContent = textOutput;
                countInfo.style = "padding-left: 12px;";
            }
        }
}

function statsConsoleSetup() {
    if (errorCount > 0) {
        statsConsoleInfo(errorMsg, errorCount, "statsContentConsoleInfoError", "Error");
    }
    
    if (warnCount > 0) {
        statsConsoleInfo(warnMsg, warnCount, "statsContentConsoleInfoWarn", "Warn");
    }
    
    if (infoCount > 0) {
        statsConsoleInfo(infoMsg, infoCount, "statsContentConsoleInfoInfo", "Info");
    }
    
    if (traceCount > 0) {
        statsConsoleInfo(traceMsg, traceCount, "statsContentConsoleInfoTrace", "Trace");
    }
}