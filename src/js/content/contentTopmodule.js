const ids = ["ContentLatestRSS", "statsContentConsoleInfo", "nothingWillRun"];

showMenu("default");


async function showMenu(module) {
    if (module === "default") {
        var max = ids.length;
        var choiceRNG = Math.floor(Math.random() * max);
        var moduleName = ids[choiceRNG];
        module = moduleName;

        if (!devMode() && module === "statsContentConsoleInfo") {
            return showMenu("default");
        }
    } else if (module === "nothingWillRun") {
        return;
    }

    console.log(module)
    for (i in ids) {
        if (module === ids[i]) {
            var element = document.getElementById(module);
            if (!removeVisibleTag(element)) {
                switchVisibleTag(element);
                activateMenu(module);
            }
        }
        else {
            var element = document.getElementById(ids[i]);
            removeVisibleTag(element);
        }
    }
}

function removeVisibleTag(element) {
    if (element !== null && element.classList !== null)
    if (element.classList.contains("visible") && element.classList.length > 0) {
        element.classList.remove("visible");
        return true;
    }
    return false;
}

function switchVisibleTag(element) {
    if (element !== null && element.classList !== null)
        if (element.classList.contains("visible") && element.classList.length > 0) {
            element.classList.remove("visible");
            return true;
        } else {
            element.classList.add("visible");
            return true;
        }
    return false;
}

function activateMenu(menuName) {
    if (menuName === "statsContentConsoleInfo") {
        console.info("Loading console embed");
    }
    else if (menuName === "ContentLatestRSS") {
        getRSS();
    }
}

function getRSS() {
    const RSS_URL = location.origin + "/rss.rss";

    fetch(RSS_URL)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => getLastRSSFeed(data))
}

function getLastRSSFeed(data) {
    const items = data.querySelectorAll("item");
    var size = items.length;
    size--;
    ShowRSSPost(items[size]);
}

function ShowRSSPost(data) {
    var link = data.querySelector("link");
    var title = data.querySelector("title");
    var description = data.querySelector("description");
    var date = data.querySelector("pubDate").textContent; 

   var dateGMT =  getRSSToDate(date);

    document.getElementById("titleNews").textContent = title.textContent;
    document.getElementById("titleNews").href = link.textContent;
    document.getElementById("titleNews").style = "padding-left:12px;padding-right:12px;";
    document.getElementById("descriptionNews").textContent = description.textContent;
    document.getElementById("descriptionNews").style = "padding-left:12px;";
    document.getElementById("dateNews").textContent = dateGMT;
}

function getRSSToDate(pubDate) {
    var date = new Date(pubDate);

    var months = Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
    var string = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();

    return string;
}