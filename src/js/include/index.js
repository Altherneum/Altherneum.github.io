stopTime("load");
startTime("index");

index();

async function index() {
    console.log("Loading website");
    await Metadata();
    await pages();
    stopTime("index");
}

async function includes() {
    await include_script("/src/js/content/gather.js");
    await styles();

    console.log("Loading includes");

    await include_html("/src/html/include/header.html", "body", false);
    console.log("Old Search Bar : " + localStorage.getItem("OldSearchBar"));
    console.log("All search Bar : " + localStorage.getItem('AllSearchBar'));
    if (localStorage.getItem('OldSearchBar') === "true" || localStorage.getItem('AllSearchBar') === "true") {
        await include_css("/src/css/header-navbar.css");
        await include_html("/src/html/include/navlink.html", "navlinklist", true);
    }
    if (localStorage.getItem('SearchBarList') !== "false" || localStorage.getItem('AllSearchBar') === "true") {
        await include_css("/src/css/searchbar.css");
        await include_html("/src/html/include/searchbar.html", "NavBarHolder", true);
        await include_script("/src/js/include/searchbar-list.js");
        await include_script("/src/js/include/searchbar.js");
    }
    
    await include_html("/src/html/include/scrollPercentage.html", "body", false);
    await include_script("/src/js/include/scrollPercentage.js");

    await include_html("/src/html/include/contentTopModule.html", "NavTopModuleHolder", true)
    await include_html("/src/html/include/content.html", "body", false);

    await include_html("/src/html/include/anchor.html", "content-right", true);
    await setIconTheme();

    await include_script("/src/js/content/contentTopmodule.js");


    await include_html("/src/html/include/footer.html", "body", false);
}

async function styles() {
    console.log("Loading style");

    await include_css("/src/css/theme.css");
    await include_script("/src/js/include/theme.js");
    await include_css("/src/css/font.css");
    await include_css("/src/css/user-agent.css");
    await include_css("/src/css/header.css");
    await include_css("/src/css/anchor.css");

    await include_css("/src/css/content.css");
    await include_css("/src/css/contentTopmodule.css");

    await include_css("/src/css/footer.css");
    await include_css("/src/css/scrollbar.css");
    await include_css("/src/css/scrollPercentage.css");
}

async function Metadata() {
    var title = getShortPathname().replaceAll("/", " ");
    document.title = "Altherneum 📰 " + title;

    link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/x-icon";
    link.href = "/assets/icon/icone.png";
    document.head.appendChild(link);
}

async function randomInclude(excludeSettings) {
    var max = 10;
    var random = Math.round(Math.random() * (max - 1) + 1);

    if (random == 1) {
        await include_css("/src/css/cube.css");
        await include_html("/src/html/content/cube.html", "contentArticle", true);
        await include_script("/src/js/content/cube.js");
    }
    else if (random == 2) {
        await include_multiple("console", "contentArticle");
    }
    else if (random == 3) {
        if (excludeSettings) {
            randomInclude(excludeSettings);
        }
        else {
            await include_multiple("settings", "contentArticle"); loadSettingsSwitch();
        }
    }
    else if (random == 4) {
        await include_multiple("contact", "contentArticle");
    }
    else if (random == 5) {
        await include_css("/src/css/github-update.css");
        await include_html("/src/html/content/github-update.html", "contentArticle", true);
        await include_script("/src/js/content/github-update.js");
    }
    else if (random == 6) {
        await include_css("/src/css/github-commits.css");
        await include_html("/src/html/content/github-commits.html", "contentArticle", true);
        await include_script("/src/js/content/github-commits.js");
    }
    else if (random == 7) {
        await include_css("/src/css/github-events.css");
        await include_html("/src/html/content/github-events.html", "contentArticle", true);
        await include_script("/src/js/content/github-events.js");
    }
    else if (random == 8) {
        await include_multiple("donut", "contentArticle", true);
    }
    else if (random == 9) {
        await include_multiple("frames", "contentArticle", true);
        setMenuVisible(false);
        injectAsBackground();
    }
    else if(random == 10){
        await include_multiple("minesweeper", "contentArticle", true);
    }
}

async function pages() {
    console.log("Loading custom page");
    var block = false;
    if (block && localStorage.getItem('Granted') !== "true") {
        await includes();
        await include_css("/src/css/maintenance.css");
        await include_html("/src/html/content/maintenance.html", "contentArticle", true);
        randomInclude(true);
    }
    else {
        if (pathNameMatchPage("/", true) || pathNameMatchPage("/index", true)) {
            await includes();

            await include_css("/src/css/welcome.css");
            await include_html("/src/html/content/welcome.html", "contentArticle", true);

            randomInclude(false);
        }

        else if (pathNameMatchPage("/settings", true)) {
            await includes();

            await include_css("/src/css/settings.css");
            await include_html("/src/html/content/settings.html", "contentArticle", true);
            await include_script("/src/js/content/settings.js"); loadSettingsSwitch();
        }

        else if (pathNameMatchPage("/github", false) && await CheckPageWith("github")) { }
        else if (pathNameMatchPage("/cours", false) && await CheckPageWith("cours")) { }
        else if (pathNameMatchPage("/outils", false) && await CheckPageWith("outils")) { }
        else if (pathNameMatchPage("/admin", false) && await CheckPageWith("admin")) { }
        else if (pathNameMatchPage("/games", false) && await CheckPageWith("games")) { }
        else if (pathNameMatchPage("/discord", false) && await CheckPageWith("discord")) { }

        else {
            await includes();

            await include_css("/src/css/404.css");
            await include_html("/src/html/content/404.html", "contentArticle", true);
            console.warn("Erreur : 404");

            if (pathNameMatchPage("/404", true)) {
                await include_html("/src/html/content/404-custom.html", "erreur", true);
            }
        }
    }
    await include_script("/src/js/include/viewcount.js");
    await include_script("/src/js/content/date.js");
    await include_script("/src/js/include/cursor.js");

    await includeDevFeatures();
}

async function CheckPageWith(PageName){
    await include_script("/src/js/include/pages/" + PageName + ".js");
    return CheckPage();
}

function getShortPathname() {
    var path = window.location.pathname;
    path = path.replace(".html", "");
    return path;
}

function pathNameMatchPage(path, strict) {
    var pathname = getShortPathname();
    if (strict === true) {
        if (path.toLowerCase() === pathname.toLowerCase()) {
            console.log("Loading : " + pathname);
            statsConsoleInfo(pathname, undefined, "Index.JS");
            return true;
        }
    }
    else if (strict === false) {
        var lowerCasePath = path.toLowerCase();
        if (pathname.startsWith(lowerCasePath.toLowerCase())) {
            console.log("Finding : " + lowerCasePath + "/...");
            return true;
        }
    }
    return false;
}

function devMode() {
    if (window.location.hostname === "127.0.0.1") {
        return true; //Preview on local vscode
    } else if (window.location.hostname === "3000.code.altherneum.fr"){
        return true; //Preview mode on code-server
    }

    if (localStorage.getItem('devMode') === "true") {
        return true;
    }
    else {
        return false;
    }
}

async function includeDevFeatures() {
    if (devMode()) {
        addConsoleInfoOnAnchor();
        await devFooter();
    }
}

async function devFooter() {
    var devFooter = document.getElementById("devFooter");
    if (devFooter != null) {
        devFooter.style = "";
        var offline = document.getElementById("offline-url");
        var online = document.getElementById("online-url");
        var mixed = document.getElementById("mixed-url");

        offline.href = "http://127.0.0.1:3000" + window.location.pathname;
        online.href = "https://doc.Altherneum.fr" + window.location.pathname;
        mixed.href = "https://3000.code.altherneum.fr" + window.location.pathname;
    }

    var codeServerImg = document.getElementById("code-server-footer");
    if(codeServerImg != null){
        codeServerImg.style = "";
    }

    await devTest();
}

async function devTest() {
    console.log("Dev mode ON : " + window.location.hostname);
    //Test module ⏬
}