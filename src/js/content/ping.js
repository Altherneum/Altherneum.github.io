run("https", "google.fr", 443);
function run(prot, host, port) {
    return new Promise(async (resolve, reject) => {
        setInterval(() => {
            setTimeout(() => {
                ping(prot, host, port).then(resolve);
            }, 500);
        }, 500);
    });
}


async function ping(prot, host, port) {
    document.getElementById("text").textContent = prot + "://" + host + ":" + port;
    document.getElementById("adress").href = prot + "://" + host + ":" + port;

    var started = new Date().getTime();
    var http = new XMLHttpRequest();

    http.open("GET", prot + "://" + host + ":" + port, true);

    http.setRequestHeader("Content-Type", "application/json");
    http.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    http.setRequestHeader("Accept", "application/json");
    http.setRequestHeader("Access-Control-Allow-Origin", "*");
    http.setRequestHeader("Access-Control-Allow-Headers", "*");
    http.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD");
    
    http.onreadystatechange = function () {
        if (http.readyState == http.DONE) {
            var ended = new Date().getTime();
            var milliseconds = ended - started;

            document.getElementById("ping-value").textContent = milliseconds;
            document.getElementById("errorCode").textContent = "Code " + http.DONE;
            document.getElementById("errorCodeDescription").textContent = "OK"
        }
    };



    http.addEventListener("error", function sendError() {
        document.getElementById("errorCode").textContent = "Code " + http.status;
        document.getElementById("errorCodeDescription").textContent = "erreur non géré"
    });

    try {
        http.send(null);
    } catch (exception) {
        document.getElementById("errorCode").textContent = exception;
        document.getElementById("errorCodeDescription").textContent = "";
        console.log(exception);
    }
}