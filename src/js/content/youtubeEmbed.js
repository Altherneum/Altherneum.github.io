// https://developers.google.com/youtube/player_parameters
var total = 0;

async function loadYouTubeEmbed() {
    await setVideoScreenLocking();
    createPlayListList();
    GetVideos(shuffle(GetVideoList()), getVideoListType());
}

var shown = ["all"];
function show(name) {
    setMenuActiveColor(name);

    var rootElement = document.getElementById("videoholder");
    var rootChilds = rootElement.children;
    for (children in rootChilds) {
        var child = rootChilds[children];
        showOrHideSong(shown, child);
    }
}

function setMenuActiveColor(MenuID) {
    var menu = document.getElementById(MenuID);
    menu.classList.toggle("active");

    if (MenuID === "all") {
        var allMenu = document.getElementById("menu-all").querySelectorAll("button");
        for (element in allMenu) {
            allMenu[element].classList = "";
        }

        var defaultMenu = document.getElementById("menu-default").querySelectorAll("button");
        for (element in defaultMenu) {
            defaultMenu[element].classList = "";
        }
        shown = ["all"];
    } else {
        if (menu.classList.contains("active")) {
            shown.push(MenuID);
        }
        else {
            var NewShown = shown.filter(e => e !== MenuID);
            shown = NewShown;
        }
    }
}

function hideMenu(menuName) {
    var menu = document.getElementById(menuName);
    menu.style.display = "none";
}

function showOrHideSong(name, element) {
    if (element != undefined && element.classList != undefined) {
        var found = true;
        for (tags in name) {
            if (!element.classList.contains(name[tags])) {
                found = false;
                element.style.display = "none";
            }
            if (name[tags] === "all") {
                found = true;
                element.style.display = "flex";
            }
        }
        if (found) {
            if (element.style.display === "none" || element.style.display === undefined || element.style.display === "") {
                element.style.display = "flex";
            }
        }
    }
}

function shuffle(array) {
    let currentIndex = array.length;
    console.log("array length is : " + array.length)

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

async function GetVideos(videoList, VideoListType) {
    await include_script("/src/js/content/auto-scroll.js");
    addButtons(VideoListType);

    var hash = decodeURIComponent(window.location.hash).replace("#", "");
    var LoadSingleVideo = false;
    if (hash !== "") {
        LoadSingleVideo = true;
        hideMenu("menu-all");
        hideMenu("menu-default");
    }
    else {
        hideMenu("menu-link");
    }

    for (video in videoList) {
        var videoID = videoList[video].videoID;

        if (LoadSingleVideo) {
            if (videoID === hash) {
                await parseVideoParam(videoList, video, videoID, false);
                total = 1;
                break;
            }
        }
        else {
            await parseVideoParam(videoList, video, videoID, false);
            total += 1;
        }

        autoScroll(true, "center");
    }

    if (LoadSingleVideo && total !== 1) {
        var div_card = addCard(false, false, hash, "", false, false);
        addCardData(div_card, "404", "Code YouTube \" " + hash + " \" incorrect !", "/assets/svg/link-broken.svg", true);
        videoholder.appendChild(div_card);
        div_card.style.display = "flex";
    }
    else if (!LoadSingleVideo) {
        getVideoChannel();
    }

    console.log(total);
}

async function parseVideoParam(videoList, video, videoID, premadePlayList) {
    var short;
    var top;
    var premadePlayList;
    var categorie;
    var text;
    var playlist;


    if (premadePlayList == false) {
        short = videoList[video].short;
        if (short === undefined) {
            short = false;
        }

        top = videoList[video].top;
        if (top === undefined) {
            top = false;
        }

        premadePlayList = videoList[video].premadePlayList;
        if (premadePlayList === undefined) {
            premadePlayList = false;
        }

        categorie = videoList[video].categorie;

        if (videoList[video].text !== undefined) {
            text = videoList[video].text;
        }
        else {
            text = "";
        }

        playlist = videoList[video].playlist;
        if (playlist === undefined) {
            playlist = false;
        }
    }

    let fetchURL = getFetchURL(playlist, premadePlayList, videoID);

    await addIFrame(playlist, videoID, top, categorie, fetchURL, text, short, premadePlayList, false, "videoholder");
}

function getFetchURL(playlist, premadePlayList, videoID) {
    if (playlist == true && premadePlayList == false) {
        return "https://youtube.com/oembed?url=https://www.youtube.com/playlist?list=" + videoID + "&format=json";
    } else if (playlist == true && premadePlayList == true) {
        return "https://www.youtube.com/oembed?url=https://youtube.com/watch?v=" + videoID + "&format=json";
    }
    else {
        return "https://www.youtube.com/oembed?url=https://youtube.com/watch?v=" + videoID + "&format=json";
    }
}

function addButtons(Types) {
    var menu = document.getElementById("menu-all");
    for (videoType in Types) {
        var type = Types[videoType];
        var emoji = getEmoji(type);

        var button = document.createElement("button");
        button.id = type;
        button.setAttribute("onClick", "show('" + type + "');");

        var text = document.createElement("p");
        text.textContent = emoji + " " + type;

        button.appendChild(text);
        menu.appendChild(button);
    }
}

async function addIFrame(playlist, videoID, top, categorie, fetchUrl, text, short, premadePlayList, latest, element) {
    try {
        var response = await fetch(fetchUrl);
        var status = response.status;

        var videoholder = document.getElementById(element);
        var div_card;

        if (status === 200) {
            var jsonResponse = await response.json();
            JSONdata = jsonResponse;

            var title = JSONdata.title;
            var length = 75;
            var title = title.length > length ? title.substring(0, length - 3) + "..." : title;
            var thumbnail = JSONdata.thumbnail_url;

            div_card = addCard(top, playlist, videoID, categorie, latest, premadePlayList);

            var video_div = addCardData(div_card, title, text, thumbnail, false);
            addVideoCard(video_div, videoID, playlist, short, premadePlayList);

            videoholder.appendChild(div_card);

            constructPlayList(videoID, playlist, top, categorie);
        }
        else if (status === 404) {
            div_card = addCard(top, playlist, videoID, categorie, latest, premadePlayList);
            var video_div = addCardData(div_card, "404", "Vidéo supprimée !", "/assets/svg/link-broken.svg", true);
            videoholder.appendChild(div_card);
        }
        else if (status === 403) {
            div_card = addCard(top, playlist, videoID, categorie, latest, premadePlayList);
            var video_div = addCardData(div_card, "403", "Vidéo privée !", "/assets/svg/link-broken.svg", true);
            videoholder.appendChild(div_card);
        }
        else if (status === 401) {
            div_card = addCard(top, playlist, videoID, categorie, latest, premadePlayList);
            var video_div = addCardData(div_card, "401", "Vidéo sans embed !", "/assets/svg/link-broken.svg", true);
            videoholder.appendChild(div_card);
        }
        else {
            console.error(response);
            var jsonResponse = null;
        }

        showOrHideSong(shown, div_card);
    } catch (error) {
        console.error(error + "\n" + videoID);
    }
}

function addCard(top, playlist, videoID, categorie, latest, premadePlayList) {
    var div_card = document.createElement("div");
    var classname = "";
    if (top) {
        classname += "top ";
    }
    if (playlist) {
        classname += "playlist ";
    }
    if (latest) {
        classname += "latest ";
    }

    if (premadePlayList) {
        classname += "premadePlayList ";
    }

    classname += "card " + categorie;
    div_card.className = classname;

    var divLogoHolder = document.createElement("div");
    divLogoHolder.id = "logoHolder";

    if (!premadePlayList) {
        var anchor = document.createElement("a");
        anchor.href = "#" + videoID;
        anchor.onclick = () => { };

        anchor.id = videoID;
        setScrollBehavior(anchor, "center");
        divLogoHolder.appendChild(anchor);

        var imageAnchor = document.createElement("img");
        imageAnchor.src = "/assets/svg/link.svg";
        imageAnchor.className = "topimg svg";
        anchor.appendChild(imageAnchor);
    }

    if (top) {
        var imageTop = document.createElement("img");
        imageTop.src = "/assets/svg/star.svg";
        imageTop.className = "topimg svg";
        divLogoHolder.appendChild(imageTop);
    }
    if (playlist) {
        var imagePlayList = document.createElement("img");
        imagePlayList.src = "/assets/svg/playlist.svg";
        imagePlayList.className = "playlistimg svg";
        divLogoHolder.appendChild(imagePlayList);
    }
    if (latest) {
        var imageNew = document.createElement("img");
        imageNew.src = "/assets/svg/new.svg";
        imageNew.className = "newimg svg";
        divLogoHolder.appendChild(imageNew);
    }
    if (premadePlayList) {
        var imagepremadePlayList = document.createElement("img");
        imagepremadePlayList.src = "/assets/svg/dj-turntable-vinyl.svg";
        imagepremadePlayList.className = "premadePlayList svg";
        divLogoHolder.appendChild(imagepremadePlayList);
    }
    div_card.appendChild(divLogoHolder);

    var categories = categorie;
    let categorieList = categories.split(" ");
    var categorieHolder = document.createElement("p");
    categorieHolder.className = "categorieList";

    if (categories !== "Markdown") {
        for (categorieIndex in categorieList) {
            categorieHolder.textContent += " " + getEmoji(categorieList[categorieIndex]);
        }
    }

    div_card.appendChild(categorieHolder);

    return div_card;
}

function addCardData(div_card, title, text, thumbnail, error) {
    var video_title = document.createElement("h1");
    video_title.textContent = title;
    div_card.appendChild(video_title);

    var video_subtext = document.createElement("p");
    video_subtext.innerHTML = text;
    video_subtext.className = "textSub";
    div_card.appendChild(video_subtext);

    var video_div = document.createElement("div");
    video_div.className += "videoDiv";
    div_card.appendChild(video_div);

    var video_image = document.createElement("img");
    video_image.src = thumbnail;
    if (error) {
        video_image.style.width = "100%";
        video_image.style.height = "100%";
        video_image.style.maxWidth = "none";
        video_image.className = "svg";
    }
    video_image.loading = "lazy";
    video_div.appendChild(video_image);

    return video_div;
}

function addVideoCard(video_div, videoID, playlist, short, premadePlayList) {
    var video_button = document.createElement("button");
    video_button.dataset.youtubeButton = videoID;
    video_button.dataset.youtubePlayList = playlist;
    video_button.dataset.youtubeShort = short;
    video_button.dataset.youtubePremadePlayList = premadePlayList;

    video_button.setAttribute("onclick", "createIframe(this)");

    video_div.appendChild(video_button);
}

async function createIframe(event) {
    var videoID = event.dataset.youtubeButton;
    var playlist = event.dataset.youtubePlayList;
    var short = event.dataset.youtubeShort;
    var premadePlayList = event.dataset.youtubePremadePlayList;
    var youtubePlaceholder = event.parentNode;

    var url = getURL(premadePlayList, short, playlist, videoID);

    console.log("Loading embed : " + url);

    var iframe = '<iframe src="' + url + '" title="YouTube video player" frameborder="0" allow="screen-wake-lock; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    var htmlString = '<div id=' + videoID + ' class="videoDiv">' + iframe + '</div>';

    var card = youtubePlaceholder.parentNode;
    var classname = card.className;
    card.className = classname + " playing";

    console.log(youtubePlaceholder);
    youtubePlaceholder.style.display = 'none';
    youtubePlaceholder.insertAdjacentHTML('beforebegin', htmlString);
    youtubePlaceholder.parentNode.removeChild(youtubePlaceholder);

    if (premadePlayList === "true") {
        //Décharge et recharge la vidéo car l'API YT est à chier :3 ...        //NB:Uniquement sur les PlayList temporaires "TL" "TempList"
        setTimeout(() => {
            console.log("deleting video");
            var vid = document.getElementById(videoID);
            vid.firstChild.remove();
            console.log("reinserting video");
            vid.innerHTML += iframe;
        }, 1500);
        // reloading too fast dont help,
        //reloading after 1sec or more let youtube some spare time to really create the playList & embed
    }
}

function getURL(premadePlayList, short, playlist, videoID) {
    let loop;
    let autoplay = "&autoplay=1";
    let playlistarg;
    let rel = "&rel=0";
    let preURL = "https://www.youtube.com/embed/";

    if (premadePlayList === "true") {
        playlistarg = "?playlist=" + videoID;
        loop = "";
        let firstVideoID = videoID.split(",")[0];
        return preURL + firstVideoID + playlistarg + autoplay + loop + rel;
    }
    else {
        if (short === "false") {
            let YouTubeLoop = localStorage.getItem('YouTubeLoop');
            if (YouTubeLoop === "true" && playlist !== "true") {
                loop = "&loop=1";
                playlistarg = videoID + "?playlist=" + videoID;
            }
            else if (YouTubeLoop === "true" && playlist === "true") {
                loop = "&loop=1";
                playlistarg = "?list=" + videoID + "&listType=playlist";
            }
            else if (YouTubeLoop !== "true" && playlist !== "true") {
                loop = "&loop=0";
                playlistarg = videoID + "?si=Altherneum.fr";
            }
            else if (YouTubeLoop !== "true" && playlist === "true") {
                loop = "&loop=0";
                playlistarg = "?list=" + videoID + "&listType=playlist";
            }
        }
        else {
            console.log("short");
            loop = "";
            autoplay = "?autoplay=1";
            playlistarg = videoID;
        }

        return preURL + playlistarg + autoplay + loop + rel;
    }
}

async function getLatestVideoOfChannel(ChannelID, maxVideoAmount, categorie, text, top, latest) {
    const channelURL = "https://www.youtube.com/feeds/videos.xml?channel_id=" + ChannelID;
    var data = await fetch("https://api.rss2json.com/v1/api.json?rss_url=" + channelURL)
        .then(resp => resp.json())
        .then(responseData => responseData.items)
        .then(items => {
            console.log(items);
            for (i in items) {
                if (i > maxVideoAmount) {
                    break;
                }

                let videoID = items[i].link.replace("https://www.youtube.com/watch?v=", "");

                addIFrame(false, videoID, top, categorie, "https://www.youtube.com/oembed?url=https://youtube.com/watch?v=" + videoID + "&format=json", text, false, false, latest, "videoholder")
            }
        });
}

async function setVideoScreenLocking() {
    //https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API
    try {
        if ("wakeLock" in navigator) {
            console.log("Screen Wake Lock API supported!");

            var wakeLock = null;

            if (document.visibilityState === 'visible') {
                wakeLock = await navigator.wakeLock.request("screen");
                console.log("Wake Lock is active!");

                wakeLock.addEventListener('release', () => {
                    console.log('Screen Wake State used : ' + !wakeLock.released);
                });
            }
            else {
                console.log("Screen is not visible : Document visibilty state ; " + document.visibilityState);
            }

            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'visible') {
                    console.log("Requesting WakeLock ...");
                    navigator.wakeLock.request('screen').then(result => {
                        wakeLock = result;
                        console.log(wakeLock);
                    });
                }
                else {
                    console.log("Releasing WakeLock ...");
                    console.log(wakeLock);

                    wakeLock.release();

                    if (wakeLock === null) {
                        console.log("WakeLock is equal to \"null\", release OK !");
                    } else {
                        console.log("WakeLock not equal to \"null\" ...");
                        if (wakeLock.released) {
                            console.log("WakeLock is released (sucess)");
                        }
                        else {
                            console.log("WakeLock is not released (error)");
                        }
                        console.log(wakeLock);
                    }
                }
            });
        }
        else {
            console.log("Wake lock is not supported by this browser.");
        }
    } catch (err) {
        console.error(err);
    }
}

var categorieList;
var playListList;
function createPlayListList() {
    categorieList = getVideoListType();
    playListList = [];
    for (categorieType in categorieList) {
        playListList.push({ tag: categorieList[categorieType], videoIDList: "", amount: 0 });
    }

    console.log(playListList);
}

async function constructPlayList(videoID, playlist, top, categorie) {
    if (top === true && playlist == false) {
        var VideoCategorieList = categorie.split(" ");
        for (categorieType in VideoCategorieList) {
            var tag = VideoCategorieList[categorieType];
            var objectIndex = playListList.findIndex(obj => obj.tag == tag);
            playListList[objectIndex].videoIDList += videoID + ",";
            playListList[objectIndex].amount += 1;

            await CheckIfPlayListAtLimit(tag);
        }
    }
}

var limit = 20;
var alreadyMadeCategorie = "";
async function CheckIfPlayListAtLimit(tag) {
    let videoIDList = playListList[playListList.findIndex(obj => obj.tag == tag)].videoIDList;
    let videoAmount = playListList[playListList.findIndex(obj => obj.tag == tag)].amount;
    if (videoAmount >= limit && !alreadyMadeCategorie.includes(tag)) {
        alreadyMadeCategorie += (" " + tag);
        await addIFrame(true, videoIDList, true, tag, getFetchURL(true, true, videoIDList), "Auto Mix", false, true, false, "videoholder");
        //await parseVideoParam(null, null, videoIDList, tag);
    }
}