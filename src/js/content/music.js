// https://developers.google.com/youtube/player_parameters?hl=fr#listType

addMusics();

function show(music) {
    hideAll();

    var videoholder = document.getElementById("videoholder");
    var classname = videoholder.className;
    videoholder.className = classname + " show-" + music;
}

function hide() {
    var videoholder = document.getElementById("videoholder");
    videoholder.className = "";
}

function hideAll() {
    hide("top"); hide("all"); hide("playlist"); hide("rain"); hide("chill"); hide("chilljp"); hide("classic"); hide("histoire"); hide("phonk"); hide("rap"); hide("trool"); hide("rock"); hide("playing");
} //this part is somehow wrong, top,all,rain,etc (param) isn't used

function addMusics() {
    var array = musiclinks;
    for (music in array) {
        var playlist = array[music].playlist;
        var videoID = array[music].videoID;
        var top = array[music].top;
        var categorie = array[music].categorie;
        var fetchUrl;
        var text;

        if (array[music].text !== undefined) {
            text = array[music].text;
        }
        else {
            text = "";
        }

        if (playlist) {
            fetchUrl = "https://youtube.com/oembed?url=https://www.youtube.com/playlist?list=" + videoID + "&format=json"
        } else {
            fetchUrl = "https://www.youtube.com/oembed?url=https://youtube.com/watch?v=" + videoID + "&format=json"
        }

        fetchMusic(playlist, videoID, top, categorie, fetchUrl, text);
    }
}

function fetchMusic(playlist, videoID, top, categorie, fetchUrl, text) {
    fetch(fetchUrl).then(response => response.json().then(data => {
        JSONdata = data

        var title = JSONdata.title;
        var length = 75;
        var title = title.length > length ? title.substring(0, length - 3) + "..." : title;

        var thumbnail = JSONdata.thumbnail_url;

        var videoholder = document.getElementById("videoholder");

        var div_card = document.createElement("div");
        var classname = "";
        if (top) {
            classname += "top ";
        }
        if (playlist) {
            classname += "playlist ";
        }
        classname += "card " + categorie;
        div_card.className = classname;

        if (top) {
            var imageTop = document.createElement("img");
            imageTop.src = "/assets/svg/star.svg";
            imageTop.className = "topimg svg";
            div_card.appendChild(imageTop);
        }
        if (playlist) {
            var imageTop = document.createElement("img");
            imageTop.src = "/assets/svg/playlist.svg";
            imageTop.className = "playlistimg svg";
            div_card.appendChild(imageTop);
        }

        var video_title = document.createElement("h1");
        video_title.textContent = title;
        div_card.appendChild(video_title);

        var video_subtext = document.createElement("p");
        video_subtext.innerHTML = text;
        div_card.appendChild(video_subtext);

        var video_div = document.createElement("div");
        div_card.appendChild(video_div);

        var video_image = document.createElement("img");
        video_image.src = thumbnail;
        video_image.loading = "lazy";
        video_div.appendChild(video_image);

        var video_button = document.createElement("button");
        video_button.dataset.youtubeButton = videoID;
        video_button.dataset.youtubePlayList = playlist;

        video_button.setAttribute("onclick", "createIframe(this)");

        video_div.appendChild(video_button);

        videoholder.appendChild(div_card);
    }));
}

function createIframe(event) {
    var videoID = event.dataset.youtubeButton;
    var playlist = event.dataset.youtubePlayList;
    var youtubePlaceholder = event.parentNode;

    var loop;
    if (localStorage.getItem('YouTubeLoop') === "false") {
        loop = "&loop=0";
    }
    else {
        loop = "&loop=1"
    }

    var autoplay;
    var playlist;
    if (playlist === "true") {
        playlist = "playlist?list=" + videoID;
        autoplay = "&autoplay=1";
    }
    else if (playlist === "false") {
        playlist = videoID;
        autoplay = "?autoplay=1"
    }

    var rel = "&rel=0";

    var preURL = "https://www.youtube.com/embed/";
    var url = preURL + playlist + autoplay + loop + rel;

    var htmlString = '<div> <iframe src="' + url + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>';

    var card = youtubePlaceholder.parentNode;
    var classname = card.className;
    card.className = classname + " playing";

    youtubePlaceholder.style.display = 'none';
    youtubePlaceholder.insertAdjacentHTML('beforebegin', htmlString);
    youtubePlaceholder.parentNode.removeChild(youtubePlaceholder);
}