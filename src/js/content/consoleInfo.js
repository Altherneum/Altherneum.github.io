var warnCount = 0;
var warnMsg = "";
console.warn = function (msg) {
    warnCount++;
    warnMsg = msg;
    statsConsoleInfo(msg, warnCount, "Warn");
    console.dir(msg);
}

var errorCount = 0;
var errorMsg = "";
console.error = function (msg) {
    errorCount++;
    errorMsg = msg;
    statsConsoleInfo(msg, errorCount, "Error");
    console.dir(msg);
}

var infoCount = 0;
var infoMsg = "";
console.info = function (msg) {
    infoCount++;
    infoMsg = msg;
    statsConsoleInfo(msg, infoCount, "Info");
    console.dir(msg);
}

/* var traceCount = 0;
var traceMsg = "";
console.trace = function (msg) {
    traceCount++;
    traceMsg = msg;
    statsConsoleInfo(msg, traceCount, "Trace");
    console.dir(msg);
} */

var logsCount = 0;
var logsMsg = "";
console.log = function (msg) {
    logsCount++;
    logsMsg = msg;
    statsConsoleInfo(msg, logsCount, "Log");
    console.trace(msg);
}


var dirCount = 0;
var dirMsg = "";
console.dir = function (msg) {
    dirCount++;
    dirMsg = msg;
    statsConsoleInfo(msg, dirCount, "Dir");
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

function SendToLog(text, textOutput) {
    if (localStorage.getItem('AllLogs') !== "true") {
        if (text === "Error" || text === "ErrorType") {
            if (localStorage.getItem('ErrorLogging') !== "true") {
                return;
            }
        }
        else if (text === "Warn") {
            if (localStorage.getItem('WarningLogging') !== "true") {
                return;
            }
        }
        else if (text === "Info") {
            if (localStorage.getItem('LogLogging') !== "true") {
                return;
            }
        }
        /* else if (text === "Trace") {
            if (localStorage.getItem('LogLogging') !== "true") {
                return;
            }
        } */
        else if (text === "Log") {
            if (localStorage.getItem('LogLogging') !== "true") {
                return;
            }
        }
        else if (text === "Dir") {
            return; //return to avoid loop
        }
        else if (text === "Index.JS") {
            if (localStorage.getItem('VisitedLogs') === "false") {
                return;
            }
        }
        else {
            if (localStorage.getItem("LogLogging") !== "true") {
                return;
            }
        }

        try {
            if (devMode()) {
                return;
            }
        }
        catch (error) {
            console.trace("DevMode failed : " + error);
        }
    }
    else
    {
        if (text === "Dir") {
            return; //return to avoid loop
        }
    }

    try {
        GetData(textOutput); 
    } catch (error) {
        console.trace("WebHook failed : " + error);
    }
}

/* async function GetData(text) {
    // Utilise userAgentData si disponible, sinon fallback sur userAgent
    const uaData = navigator.userAgentData;
    const platform = uaData ? uaData.platform : navigator.platform;
    const brands = uaData ? await uaData.getHighEntropyValues(['brands', 'mobile']).then(data => data) : { brands: [], mobile: false };

    const brand = brands.brands?.[1]?.brand || "Unknown";
    const mobile = brands.mobile || /Android|iPhone/i.test(navigator.userAgent);
    const ip = await getUserIP();

    sendToWebHook("1332057163564191974", "O34H4kQUU35omVFuEs1JBqiFh9d4G2uUlLFeOl5lpdL2vjfqhCJ9zHpr3XnfjvgJmdd2", "⬆️\n\n\n` " + ip + " ` sur ` " + getShortPathname() + " `\nSur ` " + platform + " ` ` " + navigator.vendor + "/" + brand + " ` ` lang:" + navigator.language + " ` ` mobile:" + mobile + " `\n` " + window.navigator.userAgent + " `\n```\n" + text + "```\n\n⬇️", "POST");
} */

async function GetData(text) {
    let message = "";

    message += "⬆️\n";

    if(text !== ""){
        message += "\n- **__text__** :\n```\n" + text + "\n```\n";
    }

    let pathName = getShortPathname();
    message += "\n- pathName : ` " + pathName + " ` ";

    let ip = "?.?.?.?";
    ip = await getUserIP();
    message += "\n- IP : ` " + ip + " ` ";

    let platform;
    if (navigator.userAgentData !== undefined && navigator.userAgentData !== null) {
        platform = navigator.userAgentData.platform;
    }
    else {
        platform = navigator.platform;
    }
    message += "\n- platform : ` " + platform + " ` ";

    let osCPU = navigator.oscpu;
    message += "\n- osCPU : ` " + osCPU + " ` ";

    let product = navigator.product;
    message += "\n- product : ` " + product + " ` ";

    let productSub = navigator.productSub;
    message += "\n- productSub : ` " + productSub + " ` ";

    let appCodeName = navigator.appCodeName;
    message += "\n- appCodeName : ` " + appCodeName + " ` ";

    let appName = navigator.appName;
    message += "\n- appName : ` " + appName + " ` ";

    let brand;
    if (navigator.userAgentData !== undefined && navigator.userAgentData !== null) {
        brand = navigator.userAgentData.brands.map(brand => brand.brand).join(', ');
    }
    message += "\n- brand : ` " + brand + " ` ";

    let vendor = navigator.vendor;
    message += "\n- vendor : ` " + vendor + " ` ";

    let language = navigator.language;
    message += "\n- language : ` " + language + " ` ";

    let languages = navigator.languages;
    message += "\n- languages : ` " + languages + " ` ";

    let mobile;
    if (navigator.userAgentData !== undefined && navigator.userAgentData !== null) {
        mobile = navigator.userAgentData.mobile;
    }
    message += "\n- mobile : ` " + mobile + " ` ";

    let batterie; 
    if(navigator.getBattery){
        navigator.getBattery().then(battery => {
            batterie += "Level:" + battery.level;
            batterie += ", charging:" + battery.charging;
            batterie += ", dischargingTime:" + battery.dischargingTime;
            batterie += ", chargingTime:" + battery.chargingTime;
        });
    }
    message += "\n- batterie : ` " + batterie + " ` ";

    let webDriver = navigator.webdriver;
    message += "\n- webDriver : ` " + webDriver + " ` ";

    let appVersion = navigator.appVersion;
    message += "\n- appVersion : ` " + appVersion + " ` ";

    let uA = navigator.userAgent;
    message += "\n- userAgent : ` " + uA + " ` ";

    message += "\n\n⬇️"

    sendToWebHook("1332057163564191974", "O34H4kQUU35omVFuEs1JBqiFh9d4G2uUlLFeOl5lpdL2vjfqhCJ9zHpr3XnfjvgJmdd2", message, "POST");
}

async function getUserIP() {
  const urls = [
    'https://api.ipify.org?format=json',
    'https://ipv4.seeip.org/jsonip'
  ];

  for (let url of urls) {
    try {
      const response = await fetch(url);
      if (!response.ok) continue;

      const data = url.includes('plain') || url === 'https://icanhazip.com/' || url === 'https://checkip.amazonaws.com/' || url === 'https://api.ip.sb/ip'
        ? (await response.text()).trim()
        : await response.json();

      return data.ip || data;
    } catch (error) {
      continue;
    }
  }
  return null;
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