var warnCount = 0;
var warnMsg = "";
console.warn = async function (msg) {
    warnCount++;
    warnMsg = msg;
    await statsConsoleInfo( msg, warnCount, "Warn");
    console.log(msg);
}

var errorCount = 0;
var errorMsg = "";
console.error = async function (msg) {
    errorCount++;
    errorMsg = msg;
    await statsConsoleInfo( msg, errorCount, "Error");
    console.log(msg);
}

var infoCount = 0;
var infoMsg = "";
console.info = async function (msg) {
    infoCount++;
    infoMsg = msg;
    await statsConsoleInfo( msg, infoCount, "Info");
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

    var textOutput = "\n" + count + " : " + text + " : \n" + msg + "\n";
    messages += textOutput;

    var testDoc = document.getElementById("statsContentConsoleInfoAll");
    if (testDoc !== null && testDoc !== undefined){
        testDoc.value = messages;
        testDoc.scrollTop = testDoc.scrollHeight;
    }
}