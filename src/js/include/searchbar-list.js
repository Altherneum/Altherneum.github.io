const links = [
    {
        href: "/discord.html",
        tag: ".gg URL Discord",
        text: "Serveur Discord",
        svg: "/assets/svg/trademark/discord.svg",
    },
    {
        href: "https://discord.gg/EphmMg7vbn",
        tag: ".gg URL Discord",
        text: "Salon vocal Discord",
        svg: "/assets/svg/telephone.svg",
    },
    {
        href: "https://Altherneum.fr",
        tag: "URL",
        text: "Serveur Minecraft",
        svg: "/assets/svg/trademark/minecraft.svg",
    },
    {
        href: "/",
        tag: "URL",
        text: "Accueil",
        svg: "/assets/svg/home.svg",
    },
    {
        href: "/settings.html",
        tag: "Outils URL",
        text: "Paramètres (Settings)",
        svg: "/assets/svg/settings.svg",
    },
    {
        href: "/github/statistiques.html",
        tag: "Github ReadMe Outils",
        text: "Statistiques Github",
        svg: "/assets/svg/app-gear.svg",
    },
    {
        href: "/github/contribuer.html",
        tag: "Github ReadMe",
        text: "Comment contribuer sur github ?",
        svg: "/assets/svg/help-question.svg",
    },
    {
        href: "/github/support.html",
        tag: "Github ReadMe",
        text: "Support d'aide",
        svg: "/assets/svg/help-question.svg",
    },
    {
        href: "/github/security.html",
        tag: "Github ReadMe",
        text: "Sécurité (Security)",
        svg: "/assets/svg/password.svg",
    },
    {
        href: "/github/license.html",
        tag: "Github ReadMe",
        text: "License Apache",
        svg: "/assets/svg/scroll-text.svg",
    },
    {
        href: "/github/code_of_conduct.html",
        tag: "Github ReadMe",
        text: "Code de conduite",
        svg: "/assets/svg/administrator.svg",
    },
    {
        href: "/github/issues.html",
        tag: "Github Outils",
        text: "Erreurs / Issues list Github",
        svg: "/assets/svg/issue.svg",
    },
    {
        href: "/github/contributeur.html",
        tag: "Github Outils",
        text: "Contributeurs Github",
        svg: "/assets/svg/people.svg",
    },
    {
        href: "/outils/matrice.html",
        tag: "Outils",
        text: "Matrice / Matrix",
        svg: "/assets/svg/matrix.svg",
    },
    {
        href: "/outils/matrice-windows.html",
        tag: "Outils",
        text: "Matrice / Matrix Windows",
        svg: "/assets/svg/console.svg",
    },
    {
        href: "/outils/ping.html",
        tag: "Outils Web Network",
        text: "Ping",
        svg: "/assets/svg/network.svg",
    },
    {
        href: "/outils/cube.html",
        tag: "Outils",
        text: "Cube & Sphère (Sphere) 3D",
        svg: "/assets/svg/cube.svg",
    },
    {
        href: "/outils/console.html",
        tag: "Outils",
        text: "Console",
        svg: "/assets/svg/console.svg",
    },
    {
        href: "/discord/login.html",
        tag: ".gg Discord Outils",
        text: "Exemple d'API Discord login",
        svg: "/assets/svg/trademark/discord.svg",
    },
    {
        href: "/outils/rss.html",
        tag: "Outils RSS",
        text: "Flux RSS",
        svg: "/assets/svg/languages/rss.svg",
    },
    {
        href: "/games/shopTitans.html",
        tag: "Jeux Outils",
        text: "ShopTitans",
        svg: "/assets/image/ShopTitans.webp",
    },
    {
        href: "/games/cookie.html",
        tag: "Jeux",
        text: "Cookie clicker",
        svg: "/assets/svg/cookie.svg",
    },
    {
        href: "/games/fruits.html",
        tag: "Jeux",
        text: "Suika game",
        svg: "/assets/svg/game.svg",
    },
    {
        href: "/rss.rss",
        tag: "RSS",
        text: "Fichier RSS.rss",
        svg: "/assets/svg/file-wired.svg",
    },
    {
        href: "/outils/caesar.html",
        tag: "Outils",
        text: "Chiffrement par décalage (Caesar / César)",
        svg: "/assets/svg/password.svg",
    },
    {
        href: "/outils/vigenere.html",
        tag: "Outils",
        text: "Chiffre de Vigenère",
        svg: "/assets/svg/password.svg",
    },
    {
        href: "/outils/base64.html",
        tag: "Outils",
        text: "Base64",
        svg: "/assets/svg/password.svg",
    },
    {
        href: "/outils/logger.html",
        tag: "Outils Web",
        text: "IP v4 v6 logger & browser scan",
        svg: "/assets/svg/ip.svg",
    },
    {
        href: "/outils/noise.html",
        tag: "Outils",
        text: "TV-noise",
        svg: "/assets/svg/tv2.svg",
    },
    {
        href: "/admin/contact.html",
        tag: "Admin",
        text: "Contacter l'administrateur du projet",
        svg: "/assets/svg/contact.svg",
    },
    {
        href: "/admin/film.html",
        tag: "Admin",
        text: "Les films conseillés par l'administrateur d'Altherneum",
        svg: "/assets/svg/film.svg",
    },
    {
        href: "/admin/music.html",
        tag: "Admin",
        text: "Musiques conseillés par l'administrateur d'Altherneum (Music)",
        svg: "/assets/svg/music.svg",
    },
    {
        href: "/admin/series.html",
        tag: "Admin",
        text: "Séries conseillés par l'administrateur d'Altherneum (Series)",
        svg: "/assets/svg/tv.svg",
    },
    {
        href: "/admin/animes.html",
        tag: "Admin",
        text: "Animes conseillés par l'administrateur d'Altherneum (Animés)",
        svg: "/assets/svg/draw.svg",
    },
    {
        href: "/admin/to-watch.html",
        tag: "Admin",
        text: "Animes (Animés), Films, Séries (Series) À voir de l'administrateur d'Altherneum",
        svg: "/assets/svg/help-question.svg",
    },
    {
        href: "/admin/donation.html",
        tag: "Admin Crypto",
        text: "Donation pour l'administrateur d'Altherneum",
        svg: "/assets/svg/donation.svg",
    },
    {
        href: "/admin/note.html",
        tag: "Admin ReadMe Cours",
        text: "Notes en cours de l'administrateur d'Altherneum",
        svg: "/assets/svg/note.svg",
    },
    {
        href: "https://github.com/Altherneum/",
        tag: "Repo Github URL",
        text: "Github organisation",
        svg: "/assets/svg/trademark/organisation.svg",
    },
    {
        href: "/404.html",
        tag: "Web",
        text: "Erreur 404",
        svg: "/assets/svg/link-broken.svg",
    },
    {
        href: "/github/readme.html",
        tag: "Github ReadMe",
        text: "ReadMe Github",
        svg: "/assets/svg/note.svg",
    },
    {
        href: "/github/altherneum.github.io.html",
        tag: "Repo Github ReadMe Web",
        text: "Repo du site Altherneum.github.io",
        svg: "/assets/svg/trademark/repo.svg",
    },
    {
        href: "/github/.github.html",
        tag: "Repo Github ReadMe Cours",
        text: "Repo des notes .github",
        svg: "/assets/svg/trademark/repo.svg",
    },
    {
        href: "/github/plugin.html",
        tag: "Repo Github ReadMe",
        text: "Repo du plugin (MC)",
        svg: "/assets/svg/trademark/repo.svg",
    },
    {
        href: "/github/resourcePack.html",
        tag: "Repo Github ReadMe",
        text: "Repo du resource pack",
        svg: "/assets/svg/trademark/repo.svg",
    },
    {
        href: "/github/bot.html",
        tag: "Repo Github ReadMe",
        text: "Repo bot (Discord)",
        svg: "/assets/svg/trademark/repo.svg",
    },
    {
        href: "/github/server.html",
        tag: "Repo Github ReadMe",
        text: "Repo du serveur",
        svg: "/assets/svg/trademark/repo.svg",
    },
    {
        href: "/cours/markdown.html",
        tag: "Cours",
        text: "MarkDown .md",
        svg: "/assets/svg/languages/markdown.svg",
    },
    {
        href: "/cours/markdown-listing.html",
        tag: "Outils",
        text: "MarkDown tester",
        svg: "/assets/svg/languages/markdown.svg",
    },
    {
        href: "/cours/github-readme.html",
        tag: "Github ReadMe",
        text: "ReadMe de Github (EN)",
        svg: "/assets/svg/trademark/github.svg",
    },
    {
        href: "/cours/fibre.html",
        tag: "Cours Network",
        text: "Fibre optique",
        svg: "/assets/svg/cables-cable.svg",
    },
    {
        href: "/cours/active-directory.html",
        tag: "Cours Windows OS",
        text: "Active directory Windows",
        svg: "/assets/svg/server.svg",
    },
    {
        href: "/cours/dns.html",
        tag: "Cours Windows Network",
        text: "DNS Windows server",
        svg: "/assets/svg/server.svg",
    },
    {
        href: "/cours/enterprise-network.html",
        tag: "Cours Network",
        text: "Réseaux d'entreprise avec domaine Windows",
        svg: "/assets/svg/network.svg",
    },
    {
        href: "/cours/ethernet.html",
        tag: "Cours Network",
        text: "Câbles Ethernet et leurs catégories",
        svg: "/assets/svg/ethernet.svg",
    },
    {
        href: "/cours/html.html",
        tag: "Cours Web",
        text: "HTML",
        svg: "/assets/svg/languages/html.svg",
    },
    {
        href: "/cours/css.html",
        tag: "Cours Web",
        text: "CSS",
        svg: "/assets/svg/languages/css.svg",
    },
    {
        href: "/cours/binaire.html",
        tag: "Cours",
        text: "Binaire",
        svg: "/assets/svg/matrix.svg",
    },
    {
        href: "/cours/forkBomb.html",
        tag: "Cours CMD OS Linux",
        text: "Fork bomb Windows & Linux",
        svg: "/assets/svg/bomb.svg",
    },
    {
        href: "/cours/google-dorks.html",
        tag: "Cours Web",
        text: "Google et les Google dorks",
        svg: "/assets/svg/note.svg",
    },
    {
        href: "/cours/google-doodle.html",
        tag: "Cours Web",
        text: "Liste des doodles Google",
        svg: "/assets/svg/note.svg",
    },
    {
        href: "/cours/hyper-v.html",
        tag: "Cours OS Windows",
        text: "Utilisation de Hyper-V Windows",
        svg: "/assets/svg/server.svg",
    },
    {
        href: "/cours/ip.html",
        tag: "Cours Network",
        text: "IP",
        svg: "/assets/svg/ip.svg",
    },
    {
        href: "/cours/linux.html",
        tag: "Cours OS Linux CMD",
        text: "Linux et ses commandes",
        svg: "/assets/svg/console.svg",
    },
    {
        href: "/cours/lm-studio.html",
        tag: "Cours IA",
        text: "LM studio pour lancer un LLM en local",
        svg: "/assets/svg/ai-ml.svg",
    },
    {
        href: "/cours/network.html",
        tag: "Cours Network",
        text: "Réseau",
        svg: "/assets/svg/network.svg",
    },
    {
        href: "/cours/protocoles.html",
        tag: "Cours Network OS",
        text: "Protocoles réseau",
        svg: "/assets/svg/network.svg",
    },
    {
        href: "/cours/powershell.html",
        tag: "Cours CMD OS Windows",
        text: "PowerShell",
        svg: "/assets/svg/languages/powershell.svg",
    },
    {
        href: "/cours/readme.html",
        tag: "ReadMe Cours",
        text: "Le README des cours",
        svg: "/assets/svg/note.svg",
    },
    {
        href: "/cours/retraite.html",
        tag: "Cours",
        text: "Système de retraite",
        svg: "/assets/svg/old-man.svg",
    },
    {
        href: "/cours/scam.html",
        tag: "OpSec",
        text: "Liste de scam existant",
        svg: "/assets/svg/thief.svg",
    },
    {
        href: "/cours/sql.html",
        tag: "Cours Web",
        text: "SQL",
        svg: "/assets/svg/languages/sql.svg",
    },
    {
        href: "/cours/web.html",
        tag: "Cours Web",
        text: "Développement web (HTML, CSS, JS, SQL)",
        svg: "/assets/svg/languages/html.svg",
    },
    {
        href: "/cours/Windows.html",
        tag: "Cours Windows CMD OS",
        text: "Windows et ses commandes et astuces",
        svg: "/assets/svg/console.svg",
    },
    {
        href: "https://discord.com/developers",
        tag: "URL .gg Discord",
        text: "Portail développeur Discord",
        svg: "/assets/svg/link.svg",
    },
    {
        href: "https://www.calculator.net/ip-subnet-calculator.html",
        tag: "URL Outils",
        text: "IP subnet calculator",
        svg: "/assets/svg/link.svg",
    },
    {
        href: "https://www.discordicon.com",
        tag: "URL .gg Discord",
        text: "Créateur de badge Discord",
        svg: "/assets/svg/link.svg",
    },
    {
        href: "https://rebane2001.com/discord-colored-text-generator",
        tag: "URL .gg Discord",
        text: "Générateur de text en couleur Discord",
        svg: "/assets/svg/link.svg",
    },
    {
        href: "/cours/active-directory-approbation.html",
        tag: "Cours Windows",
        text: "Relations d'approbations avec l'Active Directory",
        svg: "/assets/svg/network.svg",
    },
    {
        href: "/cours/gpo.html",
        tag: "Cours Windows",
        text: "GPO Active Directory",
        svg: "/assets/svg/developpement.svg",
    },
    {
        href: "/cours/docker.html",
        tag: "Cours OS",
        text: "Docker",
        svg: "/assets/svg/trademark/docker-16.svg",
    },
    {
        href: "/cours/cisco.html",
        tag: "Cours Network",
        text: "Cisco",
        svg: "/assets/svg/trademark/cisco.svg",
    },
    {
        href: "/sitemap.xml",
        tag: "URL XML",
        text: "Sitemap",
        svg: "/assets/svg/network.svg",
    },
    {
        href: "vscode://",
        tag: "URL",
        text: "VSCode ://",
        svg: "/assets/svg/link.svg",
    },
    {
        href: "https://code.visualstudio.com/",
        tag: "URL",
        text: "VSCode download",
        svg: "/assets/svg/download.svg",
    },
    {
        href: "https://vscode.dev/",
        tag: "URL",
        text: "VSCode .dev",
        svg: "/assets/svg/menu.svg",
    },
    {
        href: "github-windows://",
        tag: "URL Github",
        text: "Github Windows ://",
        svg: "/assets/svg/link.svg",
    },
    {
        href: "https://desktop.github.com/",
        tag: "URL Github",
        text: "Github Windows download",
        svg: "/assets/svg/download.svg",
    },
    {
        href: "https://git-scm.com/",
        tag: "URL Github",
        text: "Git",
        svg: "/assets/svg/trademark/git.svg",
    },
    {
        href: "https://developer.mozilla.org/",
        tag: "URL",
        text: "MSDN",
        svg: "/assets/svg/language.svg",
    },
    {
        href: "https://www.svgrepo.com/",
        tag: "URL",
        text: "SVGRepo",
        svg: "/assets/svg/svg.svg",
    },
    {
        href: "https://explainshell.com/",
        tag: "URL CMD OS",
        text: "explain shell",
        svg: "/assets/svg/console.svg",
    },
    {
        href: "/github/readme.html#Repo",
        tag: "URL Github ReadMe",
        text: "Github ReadMe #Repo",
        svg: "/assets/svg/language.svg",
    },
    {
        href: "calculator://",
        tag: "URL",
        text: "Calculatrice ://",
        svg: "/assets/svg/link.svg",
    },
    {
        href: "/outils/logger.html",
        svg: "/assets/svg/ip.svg",
        tag: "OpSec Outils",
        text: "Outils IP & UserAgent",
    },
    {
        href: "https://openvpn.net/",
        svg: "/assets/svg/network.svg",
        tag: "URL OpSec",
        text: "OpenVPN",
    },
    {
        href: "https://mullvad.net/",
        svg: "/assets/svg/network.svg",
        tag: "URL OpSec",
        text: "Mullvad",
    },
    {
        href: "https://keepassxc.org/",
        svg: "/assets/svg/password.svg",
        tag: "URL OpSec",
        text: "KeePassXC",
    },
    {
        href: "https://github.com/keepassxreboot/keepassxc",
        svg: "/assets/svg/trademark/repo.svg",
        tag: "URL OpSec Github",
        text: "KeePassXC Repo",
    },
    {
        href: "https://github.com/keeweb/keeweb",
        svg: "/assets/svg/trademark/repo.svg",
        tag: "URL OpSec Github",
        text: "KeeWeb Repo",
    },
    {
        href: "https://app.keeweb.info/",
        svg: "/assets/svg/password.svg",
        tag: "URL OpSec",
        text: "App.KeeWeb.info",
    },
    {
        href: "https://github.com/Kunzisoft/KeePassDX",
        svg: "/assets/svg/trademark/repo.svg",
        tag: "URL OpSec",
        text: "KeePassDX Repo",
    },
    {
        href: "https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.free",
        svg: "/assets/svg/trademark/google-play.svg",
        tag: "URL OpSec",
        text: "KeePassDX Android",
    },
    {
        href: "https://www.keepassdx.com/",
        svg: "/assets/svg/password.svg",
        tag: "URL OpSec",
        text: "KeePassDX.com",
    },
    {
        href: "https://www.motdepasse.xyz/",
        svg: "/assets/svg/password.svg",
        tag: "URL OpSec",
        text: "motdepasse .xyz",
    },
    {
        href: "https://veracrypt.fr/",
        svg: "/assets/svg/password.svg",
        tag: "URL OpSec OS",
        text: "VeraCrypt",
    },
    {
        href: "https://www.virustotal.com/",
        svg: "/assets/svg/virus.svg",
        tag: "URL OpSec",
        text: "VirusTotal",
    },
    {
        href: "https://www.torproject.org/",
        svg: "/assets/svg/trademark/tor.svg",
        tag: "URL OpSec",
        text: "Tor",
    },
    {
        href: "https://tails.net/",
        svg: "/assets/svg/trademark/tails.svg",
        tag: "URL OpSec OS Linux",
        text: "Tails",
    },
    {
        href: "https://gnupg.org/",
        svg: "/assets/svg/contact.svg",
        tag: "URL OpSec",
        text: "GnuPG",
    },
    {
        href: "https://pgp.mit.edu/",
        svg: "/assets/svg/verify.svg",
        tag: "URL OpSec",
        text: "PGP MIT",
    },
    {
        href: "https://www.thunderbird.net/",
        svg: "/assets/svg/mail.svg",
        tag: "URL OpSec",
        text: "Thunderbird",
    },
    {
        href: "https://signal.org/",
        svg: "/assets/svg/contact.svg",
        tag: "URL OpSec",
        text: "Signal",
    },
    {
        href: "https://www.getmonero.org/",
        svg: "/assets/svg/xmr.svg",
        tag: "URL OpSec Crypto",
        text: "Monero",
    },
    {
        href: "https://www.wireshark.org/",
        svg: "/assets/svg/network.svg",
        tag: "URL Network OpSec",
        text: "Wireshark",
    },
    {
        href: "https://npcap.com/",
        svg: "/assets/svg/network.svg",
        tag: "URL Network OpSec",
        text: "Npcap",
    },
    {
        href: "/src/js/content/rss.js",
        svg: "/assets/svg/languages/js.svg",
        tag: "RSS URL",
        text: "RSS .JS",
    },
];

/*

    {
        href: "",
        svg: "/assets/svg/.svg",
        tag: "",
        text: "",
    },
*/

var tagList = ["Cours", "URL", "Network", "Github", "CMD", ".gg", "Discord", "OpSec", "Crypto", "OS", "Outils", "ReadMe", "RSS", "XML", "Windows", "Web", "IA", "Linux", "Repo", "Jeux", "Admin"];

function getTagList(maxSize){
    var tagListReturned = [];
    if (maxSize >= 1) {
        for (let id = 0; id < maxSize; id++) {
            var random = Math.floor(Math.random() * tagList.length);
            if (!tagListReturned.includes(tagList[random])) {
                tagListReturned.push(tagList[random]);
            }
            else {
                id--;
            }
        }
    }
    else {
        tagListReturned = tagList;
    }
    return tagListReturned;
}