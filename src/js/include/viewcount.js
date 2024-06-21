async function viewCount(page) {
    console.info("Loading view counter");
    var pathname = window.location.pathname;
    var pathname = pathname.replaceAll("/", ".");
    var pathname = pathname.replace(".html", "");

    if (pathname === ".") {
        pathname = ".index"
    }

    var content = document.querySelector("footer");

    var divView = document.createElement("div");

    var globalView = await getViews(page);
    var globalText = document.createElement("p");
    globalText.textContent = globalView + " connexions";

    var pageView = await getViews(page + pathname);
    var pageText = document.createElement("p");
    pathname = pathname.replaceAll(".", "");
    pageText.textContent = pathname + " : " + pageView + " vues";

    divView.appendChild(globalText);
    divView.appendChild(pageText);
    content.appendChild(divView);
}

const getViews = async (repo, callback) => {
    let data = await fetch("https://visit-counter.vercel.app/counter?page=" + repo);
    let value = await data.json();
    return value;
}

async function getViewSetting() {
    if (localStorage.getItem('viewCount') === "true") {
        await viewCount("Altherneum.github.io");
    }
    if (devMode() === false) {
        if (localStorage.getItem('viewCount') == null) {
            await viewCount("Altherneum.github.io");
        }
    }
}
getViewSetting();