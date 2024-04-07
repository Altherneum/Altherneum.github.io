const resultsBox = document.getElementById("result-box");
resultsBox.style.display = "none"

const links = [
    {
        href: "/discord.html",
        text: "Serveur Discord",
    },
    {
        href: "https://Altherneum.fr",
        text: "Serveur Minecraft",
    },
    {
        href: "/settings.html",
        text: "Paramètres",
    },
    {
        href: "/github/statistiques.html",
        text: "Statistiques Github",
    },
    {
        href: "/github/contribuer.html",
        text: "Comment contribuer sur github ?",
    },
    {
        href: "/github/support.html",
        text: "Support d'aide",
    },
    {
        href: "/github/security.html",
        text: "Security",
    },
    {
        href: "/github/license.html",
        text: "License Apache",
    },
    {
        href: "/github/code_of_conduct.html",
        text: "Code de conduite",
    },
    {
        href: "/github/issues.html",
        text: "Erreur / Issues list Github",
    },
    {
        href: "/github/contributeur.html",
        text: "Contributeurs Github",
    },
    {
        href: "/outils/matrice.html",
        text: "Matrice / Matrix",
    },
    {
        href: "/outils/cube.html",
        text: "Cube & Sphère (Sphere) 3D",
    },
    {
        href: "/discord/login.html",
        text: "Exemple d'API Discord login",
    },
    {
        href: "/outils/rss.html",
        text: "Flux RSS",
    },
    {
        href: "/rss.rss",
        text: "Fichier RSS.rss",
    },
    {
        href: "/outils/caesar.html",
        text: "Chiffrement par décalage (Caesar / César)",
    },
    {
        href: "/outils/logger.html",
        text: "IP v4 v6 logger & browser scan",
    },
    {
        href: "/cours/html.html",
        text: "Cours sur le HTML",
    },
    {
        href: "/cours/css.html",
        text: "Cours sur le CSS",
    },
    {
        href: "/cours/js.html",
        text: "Cours sur le JavaScript (JS)",
    },
    {
        href: "/cours/binaire.html",
        text: "Cours sur le binaire",
    },
    {
        href: "/admin/contact.html",
        text: "Contacter l'administrateur du projet",
    },
    {
        href: "/admin/film.html",
        text: "Les films conseillés par Altherneum",
    },
    {
        href: "/admin/music.html",
        text: "Musiques conseillés par Altherneum (Music)",
    },
    {
        href: "/404.html",
        text: "Erreur 404",
    },
    {
        href: "/github/readme.html",
        text: "ReadMe Github",
    },
    {
        href: "/cours/markdown.html",
        text: "Cours sur le MarkDown .md",
    },
    {
        href: "/cours/github-readme.html",
        text: "ReadMe de Github (EN)",
    },
    {
        href: "/cours/fibre.html",
        text: "Cours sur la fibre optique",
    },
];

function keyup() {
    let result = [];
    const inputBox = document.getElementById("input-box");
    let input = inputBox.value;

    if (input.length > 0) {
        result = links.filter((link) => {
            return link.text.toLowerCase().includes(input.toLowerCase());
        });
    }

    searchbarResult(result);
}

function searchbarResult(result) {
    const resultsBox = document.getElementById("result-box");
    if (result.length) {
        const content = result.map((list, index) => {
            const href = list.href;
            return `<li><a href="` + href + `">` + list.text + `</a></li>`;
        });
        resultsBox.innerHTML = `<ul>` + content.join() + `</ul>`;
        resultsBox.style.display = "block"
    } else {
        resultsBox.style.display = "none"
    }
}