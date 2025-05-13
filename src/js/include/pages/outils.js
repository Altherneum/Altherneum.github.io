async function CheckPage() {
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
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', '/note/Liens.md', false);
        });
    }

    else if (pathNameMatchPage("/outils/matrice-windows", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', '/note/OS/Windows/Scripts/matrice.bat.md', false);
        });
    }

    else if (pathNameMatchPage("/outils/console", true)) {
        await includes();
        await include_multiple("console", "contentArticle");
    }

    else if (pathNameMatchPage("/outils/ping", true)) {
        await includes();
        await include_multiple("ping", "contentArticle");
    }

    else if (pathNameMatchPage("/outils/base64", true)) {
        await includes();
        await include_multiple("base64", "contentArticle");
    }

    else if (pathNameMatchPage("/outils/noise", true)) {
        await includes();
        await include_css("/src/css/noise.css");
        await include_html("/src/html/content/noise.html", "contentArticle", true);
    }

    else if (pathNameMatchPage("/outils/rsa", true)) {
        await includes();
        await include_multiple("rsa" , "contentArticle");
    }
        
    else if (pathNameMatchPage("/outils/crashmybrowser", true)) {
        await includes();
        await include_multiple("crashmybrowser", "contentArticle");
    }

    else if (pathNameMatchPage("/outils/question-mark", true)) {
        await includes();
        await include_multiple("question-mark", "contentArticle");
    }

    else if(pathNameMatchPage("/outils/og-meta-test", true)) {
        await include_html("/src/html/content/og-meta-test.html", "html", false);
    }

    else {
        return false;
    }
    return true;
}