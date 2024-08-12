const links = [
    {
        href: "/discord.html",
        text: "Serveur Discord",
        playlist: false,
    },
    {
        href: "https://Altherneum.fr",
        text: "Serveur Minecraft",
        playlist: false,
    },
];

function show(music) {
    hideAll();

    var music = document.getElementById(music);
    music.style = "display:block";
}

function hide(music) {
    var music = document.getElementById(music);
    music.style = "display:none";
}

function hideAll() {
    hide("topvid"); hide("rain"); hide("chill"); hide("chilljp"); hide("classic"); hide("histoire"); hide("phonk"); hide("rap"); hide("trool");
}

function addMusics() {
    //Ajouter toutes les musiques
    // for loop de la hash map
    // Ajouter dans la bonne catégorie
    // fetch l'image de la cover
    // Ajouter dans l'hash map un mode playlist
}