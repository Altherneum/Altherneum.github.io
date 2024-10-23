async function CheckPage() {
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