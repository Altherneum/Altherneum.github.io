async function CheckPage() {
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
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'profile/README.md', false);
        });
    }

    else if (pathNameMatchPage("/github/contribuer", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'CONTRIBUTING.md', false);
        });
    }

    else if (pathNameMatchPage("/github/support", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'SUPPORT.md', false);
        });
    }

    else if (pathNameMatchPage("/github/security", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'SECURITY.md', false);
        });
    }

    else if (pathNameMatchPage("/github/license", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'LICENSE.md', false);
        });
    }

    else if (pathNameMatchPage("/github/code_of_conduct", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'CODE_OF_CONDUCT.md', false);
        });
    }

    else if (pathNameMatchPage("/github/Altherneum.github.io", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/Altherneum.github.io', 'README.md', false);
        });
    }

    else if (pathNameMatchPage("/github/.github", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'README.md', false);
        });
    }

    else if (pathNameMatchPage("/github/plugin", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/plugin', 'README.md', false);
        });
    }

    else if (pathNameMatchPage("/github/resourcePack", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/resourcePack', 'README.md', false);
        });
    }

    else if (pathNameMatchPage("/github/bot", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/bot', 'README.md', false);
        });
    }

    else if (pathNameMatchPage("/github/server", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/server', 'README.md', false);
        });
    }

    else {
        return false;
    }
    return true;
}