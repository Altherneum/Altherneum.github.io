const resultsBox = document.getElementById("result-box");
resultsBox.style.display = "none"

const links = [
    {
        href: "/discord.html",
        text: "Serveur Discord",
        svg: "/assets/svg/trademark/discord.svg",
    },
    {
        href: "https://discord.gg/EphmMg7vbn",
        text: "Salon vocal Discord",
        svg: "/assets/svg/telephone.svg",
    },
    {
        href: "https://Altherneum.fr",
        text: "Serveur Minecraft",
        svg: "/assets/svg/trademark/minecraft.svg",
    },
    {
        href: "/",
        text: "Accueil",
        svg: "/assets/svg/home.svg",
    },
    {
        href: "/settings.html",
        text: "Paramètres (Settings)",
        svg: "/assets/svg/settings.svg",
    },
    {
        href: "/github/statistiques.html",
        text: "Statistiques Github",
        svg: "/assets/svg/app-gear.svg",
    },
    {
        href: "/github/contribuer.html",
        text: "Comment contribuer sur github ?",
        svg: "/assets/svg/help-question.svg",
    },
    {
        href: "/github/support.html",
        text: "Support d'aide",
        svg: "/assets/svg/help-question.svg",
    },
    {
        href: "/github/security.html",
        text: "Security",
        svg: "/assets/svg/password.svg",
    },
    {
        href: "/github/license.html",
        text: "License Apache",
        svg: "/assets/svg/scroll-text.svg",
    },
    {
        href: "/github/code_of_conduct.html",
        text: "Code de conduite",
        svg: "/assets/svg/administrator.svg",
    },
    {
        href: "/github/issues.html",
        text: "Erreur / Issues list Github",
        svg: "/assets/svg/issue.svg",
    },
    {
        href: "/github/contributeur.html",
        text: "Contributeurs Github",
        svg: "/assets/svg/people.svg",
    },
    {
        href: "/outils/matrice.html",
        text: "Matrice / Matrix",
        svg: "/assets/svg/matrix.svg",
    },
    {
        href: "/outils/matrice-windows.html",
        text: "Matrice / Matrix Windows",
        svg: "/assets/svg/console.svg",
    },
    {
        href: "/outils/ping.html",
        text: "Ping",
        svg: "/assets/svg/network.svg",
    },
    {
        href: "/outils/cube.html",
        text: "Cube & Sphère (Sphere) 3D",
        svg: "/assets/svg/cube.svg",
    },
    {
        href: "/outils/console.html",
        text: "Console",
        svg: "/assets/svg/console.svg",
    },
    {
        href: "/discord/login.html",
        text: "Exemple d'API Discord login",
        svg: "/assets/svg/trademark/discord.svg",
    },
    {
        href: "/outils/rss.html",
        text: "Flux RSS",
        svg: "/assets/svg/languages/rss.svg",
    },
    {
        href: "/games/shopTitans.html",
        text: "ShopTitans",
        svg: "/assets/image/ShopTitans.webp",
    },
    {
        href: "/games/cookie.html",
        text: "Cookie clicker",
        svg: "/assets/svg/cookie.svg",
    },
    {
        href: "/games/fruits.html",
        text: "Suika game",
        svg: "/assets/svg/game.svg",
    },
    {
        href: "/rss.rss",
        text: "Fichier RSS.rss",
        svg: "/assets/svg/file-wired.svg",
    },
    {
        href: "/outils/caesar.html",
        text: "Chiffrement par décalage (Caesar / César)",
        svg: "/assets/svg/password.svg",
    },
    {
        href: "/outils/vigenere.html",
        text: "Chiffre de Vigenère",
        svg: "/assets/svg/password.svg",
    },
    {
        href: "/outils/base64.html",
        text: "Base64",
        svg: "/assets/svg/password.svg",
    },
    {
        href: "/outils/logger.html",
        text: "IP v4 v6 logger & browser scan",
        svg: "/assets/svg/ip.svg",
    },
    {
        href: "/outils/noise.html",
        text: "TV-noise",
        svg: "/assets/svg/tv2.svg",
    },
    {
        href: "/admin/contact.html",
        text: "Contacter l'administrateur du projet",
        svg: "/assets/svg/contact.svg",
    },
    {
        href: "/admin/film.html",
        text: "Les films conseillés par Altherneum",
        svg: "/assets/svg/film.svg",
    },
    {
        href: "/admin/music.html",
        text: "Musiques conseillés par Altherneum (Music)",
        svg: "/assets/svg/music.svg",
    },
    {
        href: "/admin/series.html",
        text: "Séries conseillés par Altherneum (Series)",
        svg: "/assets/svg/tv.svg",
    },
    {
        href: "/admin/animes.html",
        text: "Animes conseillés par Altherneum (Animés)",
        svg: "/assets/svg/draw.svg",
    },
    {
        href: "/admin/to-watch.html",
        text: "Animes (Animés), Films, Séries (Series) À voir",
        svg: "/assets/svg/help-question.svg",
    },
    {
        href: "/admin/donation.html",
        text: "Donation pour Altherneum",
        svg: "/assets/svg/donation.svg",
    },
    {
        href: "/admin/note.html",
        text: "Notes en cours",
        svg: "/assets/svg/note.svg",
    },
    {
        href: "https://github.com/Altherneum/",
        text: "Github organisation",
        svg: "/assets/svg/trademark/organisation.svg",
    },
    {
        href: "/404.html",
        text: "Erreur 404",
        svg: "/assets/svg/link-broken.svg",
    },
    {
        href: "/github/readme.html",
        text: "ReadMe Github",
        svg: "/assets/svg/note.svg",
    },
    {
        href: "/github/altherneum.github.io.html",
        text: "Repo du site Altherneum.github.io",
        svg: "/assets/svg/trademark/repo.svg",
    },
    {
        href: "/github/.github.html",
        text: "Repo des notes .github",
        svg: "/assets/svg/trademark/repo.svg",
    },
    {
        href: "/github/plugin.html",
        text: "Repo du plugin (MC)",
        svg: "/assets/svg/trademark/repo.svg",
    },
    {
        href: "/github/resourcePack.html",
        text: "Repo du resource pack",
        svg: "/assets/svg/trademark/repo.svg",
    },
    {
        href: "/github/bot.html",
        text: "Repo bot (Discord)",
        svg: "/assets/svg/trademark/repo.svg",
    },
    {
        href: "/github/server.html",
        text: "Repo du serveur",
        svg: "/assets/svg/trademark/repo.svg",
    },
    {
        href: "/cours/markdown.html",
        text: "Cours sur le MarkDown .md",
        svg: "/assets/svg/languages/markdown.svg",
    },
    {
        href: "/cours/markdown-listing.html",
        text: "MarkDown tester",
        svg: "/assets/svg/languages/markdown.svg",
    },
    {
        href: "/cours/github-readme.html",
        text: "ReadMe de Github (EN)",
        svg: "/assets/svg/trademark/github.svg",
    },
    {
        href: "/cours/fibre.html",
        text: "Cours sur la fibre optique",
        svg: "/assets/svg/cables-cable.svg",
    },
    {
        href: "/cours/active-directory.html",
        text: "Cours sur l'Active directory Windows",
        svg: "/assets/svg/server.svg",
    },
    {
        href: "/cours/dns.html",
        text: "Cours sur le DNS Windows server",
        svg: "/assets/svg/server.svg",
    },
    {
        href: "/cours/enterprise-network.html",
        text: "Cours sur les réseaux d'entreprise avec domaine Windows",
        svg: "/assets/svg/network.svg",
    },
    {
        href: "/cours/ethernet.html",
        text: "Cours sur les câbles Ethernet et leurs catégories",
        svg: "/assets/svg/ethernet.svg",
    },
    {
        href: "/cours/html.html",
        text: "Cours sur le HTML",
        svg: "/assets/svg/languages/html.svg",
    },
    {
        href: "/cours/css.html",
        text: "Cours sur le CSS",
        svg: "/assets/svg/languages/css.svg",
    },
    {
        href: "/cours/binaire.html",
        text: "Cours sur le binaire",
        svg: "/assets/svg/matrix.svg",
    },
    {
        href: "/cours/forkBomb.html",
        text: "Cours sur les fork bomb Windows & Linux",
        svg: "/assets/svg/bomb.svg",
    },
    {
        href: "/cours/google-dorks.html",
        text: "Cours sur l'utilisation de Google et les Google dorks",
        svg: "/assets/svg/note.svg",
    },
    {
        href: "/cours/google-doodle.html",
        text: "Liste des doodles Google",
        svg: "/assets/svg/note.svg",
    },
    {
        href: "/cours/hyper-v.html",
        text: "Cours sur l'utilisation de Hyper-V Windows",
        svg: "/assets/svg/server.svg",
    },
    {
        href: "/cours/ip.html",
        text: "Cours sur l'IP",
        svg: "/assets/svg/ip.svg",
    },
    {
        href: "/cours/linux.html",
        text: "Cours sur Linux et ses commandes",
        svg: "/assets/svg/console.svg",
    },
    {
        href: "/cours/lm-studio.html",
        text: "Cours sur LM studio pour lancer un LLM en local",
        svg: "/assets/svg/ai-ml.svg",
    },
    {
        href: "/cours/network.html",
        text: "Cours sur le réseau",
        svg: "/assets/svg/network.svg",
    },
    {
        href: "/cours/protocoles.html",
        text: "Cours sur les protocoles réseau",
        svg: "/assets/svg/network.svg",
    },
    {
        href: "/cours/powershell.html",
        text: "Cours sur le PowerShell",
        svg: "/assets/svg/languages/powershell.svg",
    },
    {
        href: "/cours/readme.html",
        text: "Le README des cours",
        svg: "/assets/svg/note.svg",
    },
    {
        href: "/cours/retraite.html",
        text: "Cours sur le système de retraite",
        svg: "/assets/svg/old-man.svg",
    },
    {
        href: "/cours/scam.html",
        text: "Cours / liste de scam existant",
        svg: "/assets/svg/thief.svg",
    },
    {
        href: "/cours/sql.html",
        text: "Cours sur le SQL",
        svg: "/assets/svg/languages/sql.svg",
    },
    {
        href: "/cours/web.html",
        text: "Cours sur le développement web (HTML, CSS, JS, SQL)",
        svg: "/assets/svg/languages/html.svg",
    },
    {
        href: "/cours/Windows.html",
        text: "Cours sur Windows et ses commandes et astuces",
        svg: "/assets/svg/console.svg",
    },
    {
        href: "https://discord.com/developers",
        text: "URL : Portail développeur Discord",
        svg: "/assets/svg/link.svg",
    },
    {
        href: "https://www.calculator.net/ip-subnet-calculator.html",
        text: "URL : IP subnet calculator",
        svg: "/assets/svg/link.svg",
    },
    {
        href: "https://www.discordicon.com",
        text: "URL : Créateur de badge Discord",
        svg: "/assets/svg/link.svg",
    },
    {
        href: "https://rebane2001.com/discord-colored-text-generator",
        text: "URL : Générateur de text en couleur Discord",
        svg: "/assets/svg/link.svg",
    },
    {
        href: "/cours/active-directory-approbation.html",
        text: "Cours sur les relations d'approbations avec l'Active Directory",
        svg: "/assets/svg/network.svg",
    },
    {
        href: "/cours/gpo.html",
        text: "Cours sur les GPO Active Directory",
        svg: "/assets/svg/developpement.svg",
    },
    {
        href: "/cours/docker.html",
        text: "Cours sur Docker",
        svg: "/assets/svg/trademark/docker-16.svg",
    },
    {
        href: "/cours/cisco.html",
        text: "Cours sur Cisco",
        svg: "/assets/svg/trademark/cisco.svg",
    },
    {
        href: "/sitemap.xml",
        text: "Sitemap",
        svg: "/assets/svg/network.svg",
    },
    {
        href: "vscode://",
        text: "URL : VSCode ://",
        svg: "/assets/svg/link.svg",
    },
    {
        href: "https://code.visualstudio.com/",
        text: "URL : VSCode download",
        svg: "/assets/svg/download.svg",
    },
    {
        href: "https://vscode.dev/",
        text: "URL : VSCode .dev",
        svg: "/assets/svg/menu.svg",
    },
    {
        href: "github-windows://",
        text: "URL : Github Windows ://",
        svg: "/assets/svg/link.svg",
    },
    {
        href: "https://desktop.github.com/",
        text: "URL : Github Windows download",
        svg: "/assets/svg/download.svg",
    },
    {
        href: "https://git-scm.com/",
        text: "URL : Git",
        svg: "/assets/svg/trademark/git.svg",
    },
    {
        href: "https://developer.mozilla.org/",
        text: "URL : MSDN",
        svg: "/assets/svg/language.svg",
    },
    {
        href: "https://www.svgrepo.com/",
        text: "URL : SVGRepo",
        svg: "/assets/svg/svg.svg",
    },
    {
        href: "https://explainshell.com/",
        text: "URL : explain shell",
        svg: "/assets/svg/console.svg",
    },
    {
        href: "/github/readme.html#Repo",
        text: "URL : Github ReadMe #Repo",
        svg: "/assets/svg/language.svg",
    },
    {
        href: "calculator://",
        text: "URL : Calculatrice ://",
        svg: "/assets/svg/link.svg",
    },
    {
        href: "/outils/logger.html",
        svg: "/assets/svg/ip.svg",
        text: "Outils IP & UserAgent",
    },
    {
        href: "https://openvpn.net/",
        svg: "/assets/svg/network.svg",
        text: "URL : OpenVPN",
    },
    {
        href: "https://mullvad.net/",
        svg: "/assets/svg/network.svg",
        text: "URL : Mullvad",
    },
    {
        href: "https://keepassxc.org/",
        svg: "/assets/svg/password.svg",
        text: "URL : KeePassXC",
    },
    {
        href: "https://www.motdepasse.xyz/",
        svg: "/assets/svg/password.svg",
        text: "URL : motdepasse .xyz",
    },
    {
        href: "https://veracrypt.fr/",
        svg: "/assets/svg/password.svg",
        text: "URL : VeraCrypt",
    },
    {
        href: "https://www.virustotal.com/",
        svg: "/assets/svg/virus.svg",
        text: "URL : VirusTotal",
    },
    {
        href: "https://www.torproject.org/",
        svg: "/assets/svg/trademark/tor.svg",
        text: "URL : Tor",
    },
    {
        href: "https://tails.net/",
        svg: "/assets/svg/trademark/tails.svg",
        text: "URL : Tails",
    },
    {
        href: "https://gnupg.org/",
        svg: "/assets/svg/contact.svg",
        text: "URL : GnuPG",
    },
    {
        href: "https://pgp.mit.edu/",
        svg: "/assets/svg/verify.svg",
        text: "URL : PGP MIT",
    },
    {
        href: "https://www.thunderbird.net/",
        svg: "/assets/svg/mail.svg",
        text: "URL : Thunderbird",
    },
    {
        href: "https://signal.org/",
        svg: "/assets/svg/contact.svg",
        text: "URL : Signal",
    },
    {
        href: "https://www.getmonero.org/",
        svg: "/assets/svg/xmr.svg",
        text: "URL : Monero",
    },
    {
        href: "https://www.wireshark.org/",
        svg: "/assets/svg/network.svg",
        text: "URL : Wireshark",
    },
    {
        href: "https://npcap.com/",
        svg: "/assets/svg/network.svg",
        text: "URL : Npcap",
    },
];


var lastResult = [];
function keyup(event, inputBoxParam) {

    var code = event.charCode || event.keyCode;
    if (code == 27) {
        inputBoxParam.value = '';
    }

    let result = [];
    const inputBox = document.getElementById("input-box");
    let input = inputBox.value;

    if (input.length > 0) {
        result = links.filter((link) => {
            return link.text.toLowerCase().includes(input.toLowerCase());
        });

        /* if(result.length > 10){
                    result = result.slice(0, 10);
            } */
        
        if (lastResult.toString() !== result.toString()) {
            searchbarResult(result);
            addAllTags();
        }
        lastResult = result;
    } else {
        clearAllSearchBar();
    }
}

function searchbarResult(result) {
    const resultsBox = document.getElementById("result-box");
    clearSearchBarResultHTML();
    if (result.length) {
        for (i in result) {
            const href = result[i].href;
            const title = result[i].text;
            let svg;
            if (result[i].svg === undefined) {
                svg = "/assets/svg/link.svg";
            }
            else { svg = result[i].svg; }

            //console.log(href + ", " + svg + result[i].text);
            resultsBox.innerHTML += '<div><a href="' + href + '"><img src="' + svg + '" class="svg">' + title + '</a></div>'
        }
        resultsBox.style.display = "block"
    } else {
        resultsBox.style.display = "none"
    }
}

function clearAllSearchBar() {
    clearSearchBarResult();
    clearInputSearchBar();
    clearSearchBarResultHTML();
}

function clearSearchBarResult(){
    const resultsBox = document.getElementById("result-box");
    resultsBox.style.display = "none"
}

function clearSearchBarResultHTML() {
    const resultsBox = document.getElementById("result-box");
    resultsBox.innerHTML = '';
}

function clearInputSearchBar() {
    const inputBox = document.getElementById("input-box");
    inputBox.value = '';
}