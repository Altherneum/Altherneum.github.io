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
                || link.href.toLowerCase().includes(input.toLowerCase())
                || link.tag.toLowerCase().includes(input.toLowerCase()); 
        }); 

        /* if(result.length > 10){
                    result = result.slice(0, 10);
            } */
        
        if (lastResult.toString() !== result.toString()) {
            searchbarResult(result);
            addAllTags();
        }
        lastResult = result;
    } else {
        clearAllSearchBar();
    }
}

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

//searchbar
window.addEventListener('click', function (e) {
    if (!document.getElementById('searchbar').contains(e.target)) {
        closeSearchBar();
    }
});

function isSearchBarOpend(){
    const inputBox = document.getElementById("input-box");
    const resultsBox = document.getElementById("result-box");

    console.info("Try close search tab : Click outside");
    if ((resultsBox !== null && resultsBox.style.display !== "none") || (inputBox !== null && inputBox.value !== '')) {
        return true;
    }
    return false;
}

function closeSearchBar() {
    if (isSearchBarOpend) {
        clearAllSearchBar();
    }
}