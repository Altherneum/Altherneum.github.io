const resultsBox = document.getElementById("result-box");
resultsBox.style.display = "none"

var lastResult = [];

function keyup(event, inputBoxParam) {
    var code = event.charCode || event.keyCode;

    if (code == 27) {
        inputBoxParam.value = '';
    }

    const inputBox = document.getElementById("input-box");
    let input = inputBox.value;
    getResult(input, true);
}

async function getResult(query, addCursorTag) {
    if (query.length > 0) {
        console.log("SearchBar : " + query);
        var result = await checkIfInputMatchLink(query);
        /*
            if(result.length > 10) {
                result = result.slice(0, 10);
            }
        */

        if (!compareArrays(result, lastResult)) {
            showSearchbarResult(result);
            if (addCursorTag) {
                addAllTags();
            }
        }
        hideTips();

        lastResult = result;
    }
    else {
        console.log("SearchBar vide");
        clearAllSearchBar();
        showTips();
    }
}

async function checkIfInputMatchLink(query) {
    let result = [];
    var queryListed = query.split(" ");
    var counter = 0;

    for (link in links) {
        let resultTemp = compareLinks(link, queryListed);
        if (resultTemp !== null) {
            result[counter] = resultTemp;
            counter++;
        }
    }

    return result;
}

function compareLinks(linkID, queryListed) {
    var linkText = links[linkID].text;
    var linkHref = links[linkID].href;
    var linkHrefTrim = links[linkID].href.replace(".html", "");
    var linkHrefTrimBis = links[linkID].href.replace("https://", "");
    var linkTag = links[linkID].tag;
    var linkSVG = links[linkID].svg;

    let matchAll = true;

    for (singleQuery in queryListed) {
        let match = compareStringToLink(queryListed[singleQuery], linkText, linkHrefTrimBis, linkTag);
        if (!match) {
            matchAll = false;
        }
    }

    if (matchAll) {
        var linkToUse = getLinkForURL(linkHref, linkHrefTrim);
        
        return { "href": linkToUse, "svg": linkSVG, "tag": linkTag, "text": linkText };
    }
    return null;
}

function compareStringToLink(input, linkText, linkHrefTrim, linkTag) {
    let lowerCaseQuery = input.toLowerCase();

    if (linkText.toLowerCase().includes(lowerCaseQuery) || linkHrefTrim.toLowerCase().includes(lowerCaseQuery) || linkTag.toLowerCase().includes(lowerCaseQuery)) {
        return true;
    }
    else {
        return false;
    }
}

function getLinkForURL(linkHref, linkHrefTrim) {
    if (devMode()) {
        return linkHref;
    }
    else {
        return linkHrefTrim
    }
}

function showTips() {
    if (!isTipsOpen()) {
        addSearchTips();
    }
    var tips = document.getElementById("search-tips");
    tips.style.display = "flex";
}

function hideTips() {
    var tips = document.getElementById("search-tips");
    tips.style.display = "none";
}

function isTipsOpen() {
    const tipsBox = document.getElementById("search-tips");

    if (tipsBox === null) { return false; }

    if ((tipsBox.style.display !== "none")) {
        return true;
    }
    return false;
}

const compareArrays = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
};

function showSearchbarResult(result) {
    const resultsBox = document.getElementById("result-box");
    clearSearchBarResultHTML();
    if (result.length) {
        for (i in result) {
            const href = result[i].href;
            const title = result[i].text;
            let svg;
            if (result[i].svg === undefined) {
                svg = "/assets/svg/link.svg";
            }
            else if (result[i].svg === "/assets/svg/.svg") {
                svg = "/assets/svg/help-question.svg";
            }
            else { svg = result[i].svg; }

            resultsBox.innerHTML += '<div><a href="' + href + '"><img src="' + svg + '" class="svg">' + title + '</a></div>'
        }
        resultsBox.style.display = "flex"
    } else {
        resultsBox.style.display = "none"
    }
}

function clearAllSearchBar() {
    clearSearchBarResult();
    clearInputSearchBar();
    clearSearchBarResultHTML();
    clearLastResult();
}

function clearLastResult() {
    lastResult = [];
}

function clearSearchBarResult() {
    const resultsBox = document.getElementById("result-box");
    resultsBox.style.display = "none"
}

function clearSearchBarResultHTML() {
    const resultsBox = document.getElementById("result-box");
    resultsBox.innerHTML = '';
}

function clearInputSearchBar() {
    const inputBox = document.getElementById("input-box");
    inputBox.value = '';
}

document.body.addEventListener('keydown', function (e) {
    if (e.key == "Escape") {
        closeSearchBar();
    }
});

window.addEventListener('click', function (e) {
    if (!document.getElementById('searchbar').contains(e.target)) {
        closeSearchBar();
    }
    else {
        if (document.getElementById('input-box').contains(e.target)) {
            showTips();
        }
    }
});



function isSearchBarOpend() {
    const inputBox = document.getElementById("input-box");
    const resultsBox = document.getElementById("result-box");

    if (inputBox === null) { return false; }
    if (resultsBox === null) { return false; }

    if ((resultsBox.style.display !== "none") || (inputBox.value !== '')) {
        return true;
    }
    return false;
}

function closeSearchBar() {
    if (isSearchBarOpend()) {
        clearAllSearchBar();
    }

    hideTips();

    var inputBox = document.getElementById("input-box");
    inputBox.blur();
}

//Target Search bar with shortcut Shift+F
let keysPressed = {};

document.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
});

document.addEventListener('keyup', (event) => {
    keysPressed[event.key] = '';
    if (event.key == "Tab") {
        if (!document.getElementById("searchbar").contains(event.target)) {
            hideTips();
            clearAllSearchBar();
        }
    }
});

document.body.addEventListener('keydown', function (e) {
    keysPressed[e.key] = true;
    if ((keysPressed["Shift"] && e.key == "F") || (keysPressed["Shift"] && e.key == "f")) {
        var inputBox = document.getElementById("input-box");
        if (inputBox !== null) {
            if (!inputBox.contains(e.target)) {
                e.preventDefault();
                inputBox.focus();
            }
        }
    }
});

function addSearchTips() {
    var tips = document.getElementById("search-tips-holder");
    tips.innerHTML = '';
    var tipsList = getTagList(3);
    for (tipsText in tipsList) {
        var a = document.createElement("a");

        var tip = tipsList[tipsText]
        a.textContent = tip;
        a.tabIndex = 0;

        a.setAttribute("onClick", "setURLParameterClick(\"" + tip + "\", " + true + ", " + true + ", " + true + ")");
        a.setAttribute("onkeypress", "setURLParameterClick(\"" + tip + "\", " + true + ", " + true + ", " + true + ")");

        tips.appendChild(a);
    }
    addAllTags();
}

function setURLParameterClick(value, runGetAfter, setSearchInput, doHideTips) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const paramName = "search";

    urlParams.set(paramName, value);
    console.warn("set ; " + paramName + " = " + value);

    if (runGetAfter) {
        getResult(value, false);
    }
    //set All tags to false as AddAllTags() did not exist yet & cursor auto load will get tags

    if (setSearchInput) {
        const inputBox = document.getElementById("input-box");
        inputBox.value = value;
    }

    if (doHideTips) {
        hideTips();
    }
}

function getURLParameter() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const paramName = "search";
    if (urlParams.has(paramName)) {
        const searchQuery = urlParams.get(paramName);
        console.warn("found ; " + paramName + " = " + searchQuery);

        getResult(searchQuery, false);
        //set All tags to false as AddAllTags() did not exist yet & cursor auto load will get tags

        const inputBox = document.getElementById("input-box");
        inputBox.value = searchQuery;
        document.getElementById("input-box").setAttribute('value', searchQuery);
    }
}

getURLParameter();