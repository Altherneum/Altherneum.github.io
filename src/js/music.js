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