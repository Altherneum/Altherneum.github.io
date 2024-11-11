const resultsBox = document.getElementById("result-box");
resultsBox.style.display = "none"

var lastResult = [];
function keyup(event, inputBoxParam) {

    var code = event.charCode || event.keyCode;
    if (code == 27) {
        inputBoxParam.value = '';
    }

    let result = [];
    const inputBox = document.getElementById("input-box");
    let input = inputBox.value;

    if (input.length > 0) {
        result = links.filter(link => {
            return link.text.toLowerCase().includes(input.toLowerCase())
                || link.href.replace(".html","").toLowerCase().includes(input.toLowerCase())
                || link.tag.toLowerCase().includes(input.toLowerCase()); 
        });

        /*
            if(result.length > 10) {
                result = result.slice(0, 10);
            }
        */
        
        if(!compareArrays(result, lastResult)){
            console.log("result & last !=")
            searchbarResult(result);
            addAllTags();
        }
        
        lastResult = result;
    }
    else {
        clearAllSearchBar();
    }
}

const compareArrays = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
};

function searchbarResult(result) {
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
            else { svg = result[i].svg; }

            //console.log(href + ", " + svg + result[i].text);
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

function clearSearchBarResult(){
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
});

function isSearchBarOpend(){
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
}

//Target Search bar with shortcut Shift+F
let keysPressed = {};

document.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
});

document.addEventListener('keyup', (event) => {
    keysPressed[event.key] = '';
});

document.body.addEventListener('keydown', function (e) {
    keysPressed[e.key] = true;
    if (keysPressed["Shift"] && e.key == "F") {
        var inputBox = document.getElementById("input-box");
        if (inputBox !== null) {
            e.preventDefault();
            inputBox.focus();
        }
    }
});