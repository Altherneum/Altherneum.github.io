function setScrollBehavior(anchor, type) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        window.location.hash = this.getAttribute('href');
        DoScrollIntoView(document.getElementById(this.getAttribute('href').replace("#", "")), false, type);
    });
}

var onceIsDone = false;
function autoScroll(once, type) {
    var hash = decodeURIComponent(window.location.hash);
    var element = document.getElementById(hash.replace("#", ""));
    openParentSummaryIfFound(element);
    DoScrollIntoView(element, once, type);
}

function DoScrollIntoView(element, once, type) {
    if (element !== null) {
        if (once === true && onceIsDone === true) {
            return;
        }
        else {
            element.scrollIntoView({ behavior: "smooth", block: type });
            element.focus(); // no browser good support yet : // element.focus({ focusVisible: true });
            onceIsDone = true;
        }
    }
}

function openParentSummaryIfFound(element) {
    if (element !== null) {    
        var parent = element.parentNode.parentNode;
        if (parent.nodeName === 'DETAILS'){
            parent.open = true;
        }
    }
}