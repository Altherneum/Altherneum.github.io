async function CheckPage() {
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