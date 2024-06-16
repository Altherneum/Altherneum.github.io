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
    {
        href: "/cours/active-directory.html",
        text: "Cours sur l'Active directory Windows",
    },
    {
        href: "/cours/dns.html",
        text: "Cours sur le DNS Windows server",
    },
    {
        href: "/cours/enterprise-network.html",
        text: "Cours sur les réseaux d'entreprise avec domaine Windows",
    },
    {
        href: "/cours/ethernet.html",
        text: "Cours sur les câbles Ethernet et leurs catégories",
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
        href: "/cours/fibre.html",
        text: "Cours sur la fibre optique",
    },
    {
        href: "/cours/forkBomb.html",
        text: "Cours sur les fork bomb Windows & Linux",
    },
    {
        href: "/cours/google-dorks.html",
        text: "Cours sur l'utilisation de Google et les Google dorks",
    },
    {
        href: "/cours/hyper-v.html",
        text: "Cours sur l'utilisation de Hyper-V Windows",
    },
    {
        href: "/cours/ip.html",
        text: "Cours sur l'IP",
    },
    {
        href: "/cours/linux.html",
        text: "Cours sur Linux et ses commandes",
    },
    {
        href: "/cours/lm-studio.html",
        text: "Cours sur LM studio pour lancer un LLM en local",
    },
    {
        href: "/cours/network.html",
        text: "Cours sur le réseau",
    },
    {
        href: "/cours/protocoles.html",
        text: "Cours sur les protocoles réseau",
    },
    {
        href: "/cours/readme.html",
        text: "Le README des cours",
    },
    {
        href: "/cours/retraite.html",
        text: "Cours sur le système de retraite",
    },
    {
        href: "/cours/scam.html",
        text: "Cours / liste de scam existant",
    },
    {
        href: "/cours/sql.html",
        text: "Cours sur le SQL",
    },
    {
        href: "/cours/web.html",
        text: "Cours sur le développement web (HTML, CSS, JS, SQL)",
    },
    {
        href: "/cours/Windows.html",
        text: "Cours sur Windows et ses commandes et astuces",
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