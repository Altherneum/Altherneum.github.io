if (localStorage.getItem('Granted') === "true" || devMode()) {
    index();
}
else {
    window.location.href = "https://letmegooglethat.com/?q=Comment+utiliser+google+";
}

async function index() {
    await include_script("/src/js/content/consoleInfo.js");
    console.info("Loading website");
    await Metadata(); 
    await pages();
}

async function includes() {
    await include_script("/src/js/content/gather.js");
    await styles();

    console.info("Loading includes");

    await include_html("/src/html/include/header.html", "body", false);

    await include_html("/src/html/include/content.html", "body", false);
    
    await include_html("/src/html/include/anchor.html", "content-right", true);
    await setIconTheme();

    await include_html("/src/html/include/contentTopModule.html", "header", false)
    await include_script("/src/js/content/contentTopmodule.js");

    await include_html("/src/html/include/searchbar.html", "body", false);

    await include_html("/src/html/include/footer.html", "body", false);
}

async function styles() {
    console.info("Loading style");

    await include_css("/src/css/theme.css");
    await include_script("/src/js/include/theme.js");
    await include_css("/src/css/font.css");
    await include_css("/src/css/user-agent.css");
    await include_css("/src/css/header.css");
    await include_css("/src/css/header-navbar.css");
    await include_css("/src/css/anchor.css");

    await include_css("/src/css/content.css");
    await include_css("/src/css/contentTopmodule.css");

    await include_css("/src/css/footer.css");
    await include_css("/src/css/scrollbar.css");
    await include_css("/src/css/searchbar.css");
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

async function pages() {
    console.info("Loading custom page");

    if (pathNameMatchPage("/", true) || pathNameMatchPage("/index", true)) {
        await includes();

        await include_html("/src/html/content/welcome.html", "contentArticle", true);
        await include_css("/src/css/welcome.css");

        var random = Math.floor(Math.random() * 3);
        if (random == 1) {
            await include_html("/src/html/content/cube.html", "contentArticle", true);
            await include_script("/src/js/content/cube.js");
            await include_css("/src/css/cube.css");
        }
        else if (random == 2) {
            await include_multiple("console", "contentArticle");
        }
        else {
            await include_css("/src/css/settings.css");
            await include_html("/src/html/content/settings.html", "contentArticle", true);
            await include_script("/src/js/content/settings.js");
        }
    }

    else if (pathNameMatchPage("/settings", true)) {
        await includes();

        await include_css("/src/css/settings.css");
        await include_html("/src/html/content/settings.html", "contentArticle", true);
        await include_script("/src/js/content/settings.js");
    }

    else if (pathNameMatchPage("/github", false) && await pageGithub()) { }
    else if (pathNameMatchPage("/cours", false) && await pageCours()) { }
    else if (pathNameMatchPage("/outils", false) && await pageOutils()) { }
    else if (pathNameMatchPage("/admin", false) && await pageAdmin()) { }
    else if (pathNameMatchPage("/games", false) && await pageGames()) { }
    else if (pathNameMatchPage("/discord", false) && await pageDiscord()) { }

    else {
        await includes();

        await include_css("/src/css/404.css");
        await include_html("/src/html/content/404.html", "contentArticle", true);
        console.warn("Erreur : 404");

        if (pathNameMatchPage("/404", true)) {
            await include_html("/src/html/content/404-custom.html", "erreur", true);
        }
    }

    await include_script("/src/js/include/viewcount.js");
    await devFooter();
    await include_script("/src/js/include/cursor.js");
    await include_script("/src/js/content/date.js");
    await include_script("/src/js/include/searchbar.js");
}

async function pageGithub() {
    if (pathNameMatchPage("/github/statistiques", true)) {
        await includes();

        

        await include_css("/src/css/github-update.css");
        await include_html("/src/html/content/github-update.html", "contentArticle", true);
        await include_script("/src/js/content/github-update.js");

        await include_css("/src/css/github-commits.css");
        await include_html("/src/html/content/github-commits.html", "contentArticle", true);
        await include_script("/src/js/content/github-commits.js");

        await include_css("/src/css/github-events.css");
        await include_html("/src/html/content/github-events.html", "contentArticle", true);
        await include_script("/src/js/content/github-events.js");
    }

    else if (pathNameMatchPage("/github/contributeur", true)) {
        await includes();

        

        await include_html("/src/html/content/contributeur.html", "contentArticle", true);
        await include_script("/src/js/content/contributeur.js");
    }

    else if (pathNameMatchPage("/github/issues", true)) {
        await includes();

        

        await include_html("/src/html/content/issues.html", "contentArticle", true);
        await include_css("/src/css/issues.css");
        await include_script("/src/js/content/markdown.js");
        await include_script("/src/js/content/issues.js");
    }

    else if (pathNameMatchPage("/github/readme", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'profile/README.md', false, true); });
    }

    else if (pathNameMatchPage("/github/contribuer", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'CONTRIBUTING.md', false, true); });
    }

    else if (pathNameMatchPage("/github/support", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'SUPPORT.md', false, true); });
    }

    else if (pathNameMatchPage("/github/security", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'SECURITY.md', false, true); });
    }

    else if (pathNameMatchPage("/github/license", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'LICENSE.md', false, true); });
    }

    else if (pathNameMatchPage("/github/code_of_conduct", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'CODE_OF_CONDUCT.md', false, true); });
    }
        
    else if (pathNameMatchPage("/github/Altherneum.github.io", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/Altherneum.github.io', 'README.md', false, true); });
    }
        
    else if (pathNameMatchPage("/github/.github", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'README.md', false, true); });
    }
        
    else if (pathNameMatchPage("/github/plugin", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/plugin', 'README.md', false, true); });
    }
        
    else if (pathNameMatchPage("/github/resourcePack", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/resourcePack', 'README.md', false, true); });
    }
        
    else if (pathNameMatchPage("/github/bot", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/bot', 'README.md', false, true); });
    }
        
    else if (pathNameMatchPage("/github/server", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/server', 'README.md', false, true); });
    }

    else {
        return false;
    }
    return true;
}

async function pageCours() {
    if (pathNameMatchPage("/cours/readme", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/README.md', false, true); });
    }

    else if (pathNameMatchPage("/cours/markdown", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/Github/Markdown/Learning.md', false, false); });

        addHRChapter();

        await addMarkdown('Altherneum/.github', 'note/Github/Markdown/Listing.md', false, false);

        addHRChapter();

        await addMarkdown('github/.github', 'profile/README.md', false, true);
    }

    else if (pathNameMatchPage("/cours/github-readme", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('github/.github', 'profile/README.md', false, false);
            await addMarkdown('lx78WyY0J5', '1525e23e7a3502c71014a499394ee967', true, true);
        });
    }

    else if (pathNameMatchPage("/cours/fibre", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/Network/fibre.md', false, true); });
    }

    else if (pathNameMatchPage("/cours/web", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/Code/Web/HTML/learning.md', false, false); });

        addHRChapter();

        await addMarkdown('Altherneum/.github', 'note/Code/Web/HTML/liste.md', false, false);

        addHRChapter();

        await addMarkdown('Altherneum/.github', 'note/Code/Web/CSS/learning.md', false, false);

        addHRChapter();

        await addMarkdown('Altherneum/.github', 'note/Code/Web/CSS/media-queries.md', false, false);

        addHRChapter();

        await addMarkdown('Altherneum/.github', 'note/Code/Web/CSS/liste.md', false, false);

        await addMarkdown('Altherneum/.github', 'note/Code/Web/HTML/boilerplate.md', false, false);

        addHRChapter();

        await addMarkdown('Altherneum/.github', 'note/Code/Web/SQL/learning.md', false, true);
    }
        
    else if (pathNameMatchPage("/cours/html", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/Code/Web/HTML/learning.md', false, false); });

        addHRChapter();

        await addMarkdown('Altherneum/.github', 'note/Code/Web/HTML/liste.md', false, false);

        addHRChapter();

        await addMarkdown('Altherneum/.github', 'note/Code/Web/HTML/boilerplate.md', false, true);
    }

    else if (pathNameMatchPage("/cours/css", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/Code/Web/CSS/learning.md', false, false); });
       
        addHRChapter();

        await addMarkdown('Altherneum/.github', 'note/Code/Web/CSS/media-queries.md', false, false);

        addHRChapter();
        
        await addMarkdown('Altherneum/.github', 'note/Code/Web/CSS/liste.md', false, true);
    }
        
    else if (pathNameMatchPage("/cours/js", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/Code/Web/JS/learning.md', false, true); });
    }

    else if (pathNameMatchPage("/cours/binaire", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { 
            await addMarkdown('Altherneum/.github', 'note/Code/Web/Binaire/learning.md', false, false); 
            await addMarkdown('Altherneum/.github', 'note/Code/Web/Binaire/ip.md', false, true); 
        });
    }
        
    else if (pathNameMatchPage("/cours/lm-studio", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/IA/learning.md', false, true); });
    }
        
    else if (pathNameMatchPage("/cours/scam", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/Scam/learning.md', false, true); });
    }
        
    else if (pathNameMatchPage("/cours/retraite", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/Retraite/learning.md', false, true); });
    }
         
    else if (pathNameMatchPage("/cours/windows", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/OS/Windows/learning.md', false, true); });
    }

    else if (pathNameMatchPage("/cours/linux", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/OS/Linux/learning.md', false, true); });
    }

    else if (pathNameMatchPage("/cours/sql", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/Code/Web/SQL/learning.md', false, true); });
    }

    else if (pathNameMatchPage("/cours/google-dorks", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/Google/learning.md', false, true); });
    }

    else if (pathNameMatchPage("/cours/forkBomb", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/OS/forkBomb.md', false, true); });
    }

    else if (pathNameMatchPage("/cours/ip", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { 
            await addMarkdown('Altherneum/.github', 'note/Network/ip.md', false, false); 
            await addMarkdown('Altherneum/.github', 'note/Code/Web/Binaire/ip.md', false, true); 
        });
    }

    else if (pathNameMatchPage("/cours/protocoles", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/Network/protocoles.md', false, true); });
    }

    else if (pathNameMatchPage("/cours/ethernet", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/Network/wires.md', false, true); });
    }

    else if (pathNameMatchPage("/cours/network", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { 
            await addMarkdown('Altherneum/.github', 'note/Network/networks.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/Network/OSI.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/Network/cast.md', false, true);
        });
    }
        
    else if (pathNameMatchPage("/cours/hyper-v", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/OS/hyperv.md', false, true); });
    }

    else if (pathNameMatchPage("/cours/dns", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/OS/Windows/DNS.md', false, true); });
    }

    else if (pathNameMatchPage("/cours/enterprise-network", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/Network/enterprise-network.md', false, true); });
    }

    else if (pathNameMatchPage("/cours/active-directory", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/Network/active-directory.md', false, true); });
    }


    else if (pathNameMatchPage("/cours/active-directory-approbation", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/Network/active-directory-approbation.md', false, true); });
    }

    else if (pathNameMatchPage("/cours/gpo", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/Network/gpo.md', false, true); });
    }

    else if (pathNameMatchPage("/cours/cisco", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note/Network/cisco.md', false, true); });
    }
        
    else {
        return false;
    }
    return true;
}

async function pageOutils() {
    if (pathNameMatchPage("/outils/matrice", true)) {
        await include_html("/src/html/include/content.html", "body", false);
        await include_css("/src/css/theme.css");
        await include_multiple("matrice", "contentArticle");
    }

    else if (pathNameMatchPage("/outils/cube", true)) {
        await includes();

        await include_html("/src/html/content/cube.html", "contentArticle", true);
        await include_script("/src/js/content/cube.js");
        await include_css("/src/css/cube.css");
    }

    else if (pathNameMatchPage("/outils/rss", true)) {
        await includes();
        await include_script("/src/js/content/rss.js");
    }

    else if (pathNameMatchPage("/outils/logger", true)) {
        await includes();
        await include_css("/src/css/logger.css");
        await include_html("/src/html/content/logger.html", "contentArticle", true);
        await include_script("/src/js/content/logger.js");
    }

    else if (pathNameMatchPage("/outils/caesar", true)) {
        await includes();
        await include_multiple("caesar", "contentArticle");
    }
        
    else if (pathNameMatchPage("/outils/vigenere", true)) {
        await includes();
        await include_multiple("vigenere", "contentArticle");
    }

    else if (pathNameMatchPage("/outils/liens", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', '/note/Liens.md', false, true); });
    }

    else if (pathNameMatchPage("/outils/matrice-windows", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', '/note/OS/Windows/matrice.bat.md', false, true); });
    }

    else if (pathNameMatchPage("/outils/console", true)) {
        await includes();
        await include_multiple("console", "contentArticle");
    }
    
    else if (pathNameMatchPage("/outils/ping", true)) {
        await includes();
        await include_multiple("ping", "contentArticle");
    }

    else {
        return false;
    }
    return true;
}

async function pageAdmin() {
    if (pathNameMatchPage("/admin/film", true)) {
        await includes();

        await include_css("/src/css/film.css");
        await include_html("/src/html/content/film.html", "contentArticle", true);
    }

    else if (pathNameMatchPage("/admin/music", true)) {
        await includes();

        await include_css("/src/css/music.css");
        await include_script("/src/js/content/music.js");
        await include_html("/src/html/content/music.html", "contentArticle", true);
    }

    else if (pathNameMatchPage("/admin/contact", true)) {
        await includes();

        await include_css("/src/css/contact.css");
        await include_html("/src/html/content/contact.html", "contentArticle", true);
    }

    else if (pathNameMatchPage("/admin/donation", true)) {
        await includes();

        await include_css("/src/css/donation.css");
        await include_html("/src/html/content/donation.html", "contentArticle", true);
        await include_script("/src/js/content/donation.js");
    }
    
    else if (pathNameMatchPage("/admin/note", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => { await addMarkdown('Altherneum/.github', 'note.md', false, true); });
    }

    else {
        return false;
    }
    return true;
}

async function pageGames() {
    if (pathNameMatchPage("/games/fruits", true)) {
        await include_css("/src/css/user-agent.css");
        await include_css("/src/css/font.css");
        await include_css("/src/css/theme.css");

        await include_css("/src/css/fruits.css");
        await include_html("/src/html/content/fruits.html", "body", false);
        await include_script("/src/js/content/fruits.js");
    }

    else if (pathNameMatchPage("/games/shopTitans", true)) {
        await includes();

        await include_html("/src/html/content/shopTitans.html", "contentArticle", true);
        await include_css("/src/css/shopTitans.css");

        await include_script("/src/js/content/math.js");
        await include_script("/src/js/content/shopTitans.js");
    }

    else if (pathNameMatchPage("/games/cookie", true)) {
        await includes();
        await include_multiple("cookie", "contentArticle");
    }

    else {
        return false;
    }
    return true;
}

async function pageDiscord() {
    if (pathNameMatchPage("/discord/login", true)) {
        await includes();

        await include_css("/src/css/discord.css");
        await include_html("/src/html/content/discord-login.html", "contentArticle", true);
    }

    else if (pathNameMatchPage("/discord/tools", true)) {
        await includes();

        await include_css("/src/css/discord.css");
        await include_script("/src/js/content/discord-login.js");
    }

    else if (pathNameMatchPage("/discord", true)) {
        await includes();
        await include_html("/src/html/content/redirect.html", "contentArticle", true);
        await include_css("/src/css/redirect.css");
        await include_script("/src/js/content/redirect.js");
        redirect("discord.gg/rF25kjuv4v", 0);
    }

    else {
        return false;
    }
    return true;
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
            console.info("Loading : " + pathname);
            return true;
        }
    }
    else if (strict === false) {
        var lowerCasePath = path.toLowerCase();
        if (pathname.startsWith(lowerCasePath.toLowerCase())) {
            console.info("Finding : " + lowerCasePath + "/...");
            return true;
        }
    }
    return false;
}

function devMode() {
    if (window.location.hostname === "127.0.0.1") {
        return true;
    }
    if (localStorage.getItem('devMode') === "true") {
        return true;
    }
    else {
        return false;
    }
}

async function devFooter() {
    if (devMode()) {
        var devFooter = document.getElementById("devFooter");
        if (devFooter != null) {
            devFooter.style = "";
            var offline = document.getElementById("offline-url");
            var online = document.getElementById("online-url");

            offline.href = "http://127.0.0.1:3000" + window.location.pathname;
            online.href = "https://doc.Altherneum.fr" + window.location.pathname;
        }

        await devTest();
    }
}

async function devTest() {
    console.info("Dev mode ON : " + window.location.hostname);
    //Test module ⏬
}
