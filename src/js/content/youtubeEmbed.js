// https://developers.google.com/youtube/player_parameters?hl=fr#listType
var total = 0;
function show(name) {
    hide();

    var videoholder = document.getElementById("videoholder");
    var classname = videoholder.className;
    videoholder.className = classname + " show-" + name;
}

function hide() {
    var videoholder = document.getElementById("videoholder");
    videoholder.className = "";
}

async function GetVideos(videoList, VideoListType) {    
    //add buttons and videoTypes
    console.log("------------------------" + VideoListType);
    
    addButtons(VideoListType);

    await include_script("/src/js/content/auto-scroll.js");
    for (video in videoList) {
        var playlist = videoList[video].playlist;
        if (playlist === undefined) {
            playlist = false;
        }

        var short = videoList[video].short;
        if (short === undefined) {
            short = false;
        }

        var top = videoList[video].top;
        if (top === undefined) {
            top = false;
        }

        var videoID = videoList[video].videoID;
        var categorie = videoList[video].categorie;
        var fetchUrl;

        var text;
        if (videoList[video].text !== undefined) {
            text = videoList[video].text;
        }
        else {
            text = "";
        }

        if (playlist) {
            fetchUrl = "https://youtube.com/oembed?url=https://www.youtube.com/playlist?list=" + videoID + "&format=json"
        } else {
            fetchUrl = "https://www.youtube.com/oembed?url=https://youtube.com/watch?v=" + videoID + "&format=json"
        }

        await addIFrame(playlist, videoID, top, categorie, fetchUrl, text, short);

        autoScroll(true);

        total += 1;
    }
    console.log(total);
}

function addButtons(Types){
    var menu = document.getElementById("menu-all");
    for(videoType in Types){
        var type = Types[videoType];
        var emoji = getEmoji(type);

        var button = document.createElement("button");
        button.setAttribute("onClick", "show('" + type + "');");

        var text = document.createElement("p");
        text.textContent = emoji + " " + type;

        button.appendChild(text);
        menu.appendChild(button);
    }
}

async function addIFrame(playlist, videoID, top, categorie, fetchUrl, text, short) {
    try { 
    await fetch(fetchUrl).then(response => response.json().then(data => {
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

        var anchor = document.createElement("a");
        anchor.href = "#yt-" + videoID;
        anchor.id = "yt-" + videoID;
        div_card.appendChild(anchor);
        setScrollBehavior(anchor);

        var imageTop = document.createElement("img");
        imageTop.src = "/assets/svg/link.svg";
        imageTop.className = "topimg svg";
        anchor.appendChild(imageTop);

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
        video_button.dataset.youtubeShort = short;

        video_button.setAttribute("onclick", "createIframe(this)");

        video_div.appendChild(video_button);

        videoholder.appendChild(div_card);
    }));
    } catch (error) {
        console.error(error + "\n" + videoID);
    }
}

function createIframe(event) {
    var videoID = event.dataset.youtubeButton;
    var playlist = event.dataset.youtubePlayList;
    var short = event.dataset.youtubeShort;
    var youtubePlaceholder = event.parentNode;

    var loop;
    var autoplay = "&autoplay=1";
    var playlistarg;

    if (short === "false") {
        if (localStorage.getItem('YouTubeLoop') === "true" && playlist === "false") {
            loop = "&loop=1";
            playlistarg = videoID + "?playlist=" + videoID;
        }
        else if (localStorage.getItem('YouTubeLoop') === "false" && playlist === "false") {
            loop = "&loop=0";
            playlistarg = videoID + "?si=Altherneum.fr";
        }
        else if (localStorage.getItem('YouTubeLoop') === "false" && playlist === "true") {
            loop = "&loop=0";
            playlistarg = "?list=" + videoID + "&listType=playlist";
        }
        else if (localStorage.getItem('YouTubeLoop') === "true" && playlist === "true") {
            loop = "&loop=1";
            playlistarg = "?list=" + videoID + "&listType=playlist";
        }
    }
    else {
        console.log("short");
        loop = "";
        autoplay = "?autoplay=1";
        playlistarg = videoID;
    }

    var rel = "&rel=0";

    var preURL = "https://www.youtube.com/embed/";
    var url = preURL + playlistarg + autoplay + loop + rel;

    console.log("Loading embed : " + url);

    var htmlString = '<div><iframe src="' + url + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>';

    var card = youtubePlaceholder.parentNode;
    var classname = card.className;
    card.className = classname + " playing";

    youtubePlaceholder.style.display = 'none';
    youtubePlaceholder.insertAdjacentHTML('beforebegin', htmlString);
    youtubePlaceholder.parentNode.removeChild(youtubePlaceholder);
}
