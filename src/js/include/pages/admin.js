async function CheckPage() {
    if (pathNameMatchPage("/admin/film", true)) {
        await includes();

        await include_css("/src/css/film.css");
        await include_html("/src/html/content/film.html", "contentArticle", true);
    }

    else if (pathNameMatchPage("/admin/animes", true)) {
        await includes();

        await include_css("/src/css/film.css");
        await include_html("/src/html/content/animes.html", "contentArticle", true);
    }

    else if (pathNameMatchPage("/admin/series", true)) {
        await includes();

        await include_css("/src/css/film.css");
        await include_html("/src/html/content/series.html", "contentArticle", true);
    }

    else if (pathNameMatchPage("/admin/to-watch", true)) {
        await includes();

        await include_css("/src/css/film.css");
        await include_html("/src/html/content/to-watch.html", "contentArticle", true);
    }

    else if (pathNameMatchPage("/admin/music", true)) {
        await includes();

        await include_css("/src/css/youtubeEmbed.css");
        await include_html("/src/html/content/youtubeEmbed.html", "contentArticle", true);
        await include_script("/src/js/content/youtubeEmbed.js");
        await include_script("/src/js/content/music.js");

        loadYouTubeEmbed();
        await include_script("/src/js/content/settings.js"); setSwitch("YouTubeLoop", null);
    }
        
    else if (pathNameMatchPage("/admin/video", true)) {
        await includes();

        await include_css("/src/css/youtubeEmbed.css");
        await include_html("/src/html/content/youtubeEmbed.html", "contentArticle", true);
        await include_script("/src/js/content/youtubeEmbed.js");
        await include_script("/src/js/content/video.js");

        loadYouTubeEmbed();
        await include_script("/src/js/content/settings.js"); setSwitch("YouTubeLoop", null);
    }

    else if (pathNameMatchPage("/admin/contact", true)) {
        await includes();

        await include_css("/src/css/contact.css");
        await include_html("/src/html/content/contact.html", "contentArticle", true);
        await include_script("/src/js/content/contact.js");
        
        await include_script("/src/js/include/hr.js");
        await addHR("contact", true, "7.5vh", "7.5vh");
        
        await include_html("/src/html/content/techno.html", ".contact", false);
        await addHR("contentArticle", false, "7.5vh", "7.5vh");

        await include_css("/src/css/software.css");
        await include_html("/src/html/content/software.html", "contentArticle", true);
        await addHR("contentArticle", false, "7.5vh", "7.5vh");

        await include_css("/src/css/hardware.css");
        await include_html("/src/html/content/hardware.html", "contentArticle", true);
    }

    else if (pathNameMatchPage("/admin/software", true)) {
        await includes();

        await include_css("/src/css/software.css");
        await include_html("/src/html/content/software.html", "contentArticle", true);
    }

    else if (pathNameMatchPage("/admin/hardware", true)) {
        await includes();

        await include_css("/src/css/hardware.css");
        await include_html("/src/html/content/hardware.html", "contentArticle", true);
    }

    else if (pathNameMatchPage("/admin/donation", true)) {
        await includes();

        await include_css("/src/css/donation.css");
        await include_html("/src/html/content/donation.html", "contentArticle", true);
        await include_script("/src/js/content/donation.js");
    }

    else if (pathNameMatchPage("/admin/note", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note.md', false);
        });
    }

    else {
        return false;
    }
    return true;
}