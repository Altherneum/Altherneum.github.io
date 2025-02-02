function setScrollBehavior(anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        window.location.hash = this.getAttribute('href');
        DoScrollIntoView(document.querySelector(this.getAttribute('href')), false);
    });
}

var onceIsDone = false;
function autoScroll(once) {
    var hash = decodeURIComponent(window.location.hash);
    hash = hash.replace("#", "");

    var element = document.getElementById(hash);
    DoScrollIntoView(element, once);
}

function DoScrollIntoView(element, once) {
    if (element !== null) {
        if (once === true && onceIsDone === true) {
            return;
        }
        else {
            element.scrollIntoView({ behavior: "smooth", block: "start", inline: 'start' });
            element.focus();
            onceIsDone = true;
        }
    }
}