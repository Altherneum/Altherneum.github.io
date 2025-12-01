// https://developers.google.com/youtube/player_parameters
var total = 0;

async function loadYouTubeEmbed() {
    checkURL();
    await setVideoScreenLocking();
    createPlayListList();
    GetVideos(shuffle(GetVideoList()), getVideoListType(), getType());
}

function checkURL(){
    let hash = window.location.hash
    if(hash == "#footer" || hash == "#header"){
        window.history.replaceState({page: ""}, "", window.location.pathname);   
    }
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

async function GetVideos(videoList, VideoListType, videoType) {
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

    let short;
    for (video in videoList) {
        var videoID = videoList[video].videoID;
        short = videoList[video].short;

        if (LoadSingleVideo) {
            if (videoID === hash) {
                await parseVideoParam(videoList, video, videoID, false, "videoholder", videoType);
                total = 1;
                break;
            }
        }
        else {
            await parseVideoParam(videoList, video, videoID, false, "videoholder", videoType);
            total += 1;
            checkForDuplicate(videoID);
        }

        autoScroll(true, "center");
    }

    if (LoadSingleVideo && total !== 1) {
        var div_card = addCard(false, false, hash, "", false, false, videoType, short);
        addCardData(div_card, "404", "Code YouTube \" " + hash + " \" incorrect !", "/assets/svg/link-broken.svg", true);
        videoholder.appendChild(div_card);
        div_card.style.display = "flex";
    }
    else if (!LoadSingleVideo) {
        getVideoChannel();
        setGlobalPlayList(videoType, short);
    }

    console.log(total);
}

async function parseVideoParam(videoList, video, videoID, premadePlayList, divName, videoType) {
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

    await parseResponse(playlist, videoID, top, categorie, fetchURL, text, short, premadePlayList, false, divName, videoType);
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

async function addIFrame(playlist, videoID, top, categorie, text, short, premadePlayList, title, thumbnail, videoholder, div_card, videoType) {
    var length = 75;
    var title = title.length > length ? title.substring(0, length - 3) + "..." : title;


    var video_div = addCardData(div_card, title, text, thumbnail, false);
    addVideoCard(video_div, videoID, playlist, short, premadePlayList);

    videoholder.appendChild(div_card);

    constructPlayList(videoID, playlist, top, categorie, videoType);

    showOrHideSong(shown, div_card);
}

async function parseResponse(playlist, videoID, top, categorie, fetchUrl, text, short, premadePlayList, latest, element, videoType) {
    try {
        var response = await fetch(fetchUrl);
        var status = response.status;

        var videoholder = document.getElementById(element);
        let div_card = addCard(top, playlist, videoID, categorie, latest, premadePlayList, videoType, short);

        if (status === 200) {
            var jsonResponse = await response.json();
            JSONdata = jsonResponse;

            var title = JSONdata.title;
            var length = 75;
            var title = title.length > length ? title.substring(0, length - 3) + "..." : title;
            var thumbnail = JSONdata.thumbnail_url;

            addIFrame(playlist, videoID, top, categorie, text, short, premadePlayList, title, thumbnail, videoholder, div_card, videoType);
            return;
        }
        else if (status === 404) {
            addCardData(div_card, "404", "Vidéo supprimée !", "/assets/svg/link-broken.svg", true);
            videoholder.appendChild(div_card);
        }
        else if (status === 403) {
            addCardData(div_card, "403", "Vidéo privée !", "/assets/svg/link-broken.svg", true);
            videoholder.appendChild(div_card);
        }
        else if (status === 401) {
            addCardData(div_card, "401", "Vidéo sans embed !", "/assets/svg/link-broken.svg", true);
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

function addCard(top, playlist, videoID, categorie, latest, premadePlayList, videoType, short) {
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

    var urlOpenYoutube = document.createElement("a");

    let url = getURL(premadePlayList, short, playlist, videoID, false);

    if(videoType === "music"){
        urlOpenYoutube.href = url;
        var imageOpenOnYoutube = document.createElement("img");
        imageOpenOnYoutube.src = "/assets/svg/trademark/youtube-music.svg";
        imageOpenOnYoutube.className = "OpenOnYoutube svg";
    }
    else {
        urlOpenYoutube.href = url;
        var imageOpenOnYoutube = document.createElement("img");
        imageOpenOnYoutube.src = "/assets/svg/trademark/youtube.svg";
        imageOpenOnYoutube.className = "OpenOnYoutube svg";
    }

    urlOpenYoutube.appendChild(imageOpenOnYoutube);
    divLogoHolder.appendChild(urlOpenYoutube);

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

    console.log(premadePlayList + " : " + short + " : " + playlist + " : " + videoID + " : " + "true")
    console.log(typeof premadePlayList +":"+ typeof short+":" + typeof playlist+":" + typeof videoID+":");
    var url = getURL(premadePlayList === "true", short === "true", playlist === "true", videoID, true);

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

    if (premadePlayList == true) {
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

function getURL(premadePlayList, short, playlist, videoID, emebed) {
    let loop;
    let autoplay = "&autoplay=1";
    let playlistarg;
    let rel = "&rel=0";
    let prot = "https://";
    let sitename = "youtube.com/"

    //http://www.youtube.com/watch_videos?video_ids=6yuDBFn7Suo,OBbHZoEylNk,wCQfkEkePx8
    //https://www.youtube.com/embed/Zby2JOL-R0k?playlist=Zby2JOL-R0k,HzdD8kbDzZA

    let preURL;
    if(emebed === true){
        preURL = prot + sitename + "embed/";
    }
    else
    {
        preURL = prot + sitename + "";
    }

    if (premadePlayList === true) {
        if(emebed === true){
            playlistarg = "?playlist=" + videoID;
        }
        else
        {
            playlistarg = "watch_videos?video_ids=" + videoID; 
        }

        loop = "";
        
        if(emebed === true){
            let firstVideoID = videoID.split(",")[0];
            return preURL + firstVideoID + playlistarg + autoplay + loop + rel;
        }
        else
        {
            return preURL + playlistarg + autoplay + loop + rel;
        }
    }
    else {
        if (short === false) {
            let YouTubeLoop = localStorage.getItem('YouTubeLoop');
            if(YouTubeLoop === null){ YouTubeLoop = false;}
            
            if (YouTubeLoop === true && playlist === false && emebed === true) {
                loop = "&loop=1";
                playlistarg = videoID + "?playlist=" + videoID;
            }
            else if (YouTubeLoop === true && playlist === false && emebed === false) {
                loop = "&loop=1";
                playlistarg = "watch?v=" + videoID + "&playlist=" + videoID;
            }
            else if (YouTubeLoop === true && playlist === true && emebed === true) {
                loop = "&loop=1";
                playlistarg = "?list=" + videoID + "&listType=playlist";
            }
            else if (YouTubeLoop === true && playlist === true && emebed === false) {
                loop = "&loop=1";
                playlistarg = "playlist?list=" + videoID + "&listType=playlist";
            }
            else if (YouTubeLoop === false && playlist === false && emebed === true) {
                loop = "&loop=0";
                playlistarg = videoID + "?si=Altherneum.fr";
            }
            else if (YouTubeLoop === false && playlist === false && emebed === false) {
                loop = "&loop=0";
                playlistarg = "watch?v=" + videoID + "?si=Altherneum.fr";
            }
            else if (YouTubeLoop === false && playlist === true && emebed === true) {
                loop = "&loop=0";
                playlistarg = "?list=" + videoID + "&listType=playlist";
            }
            else if (YouTubeLoop === false && playlist === true && emebed === false) {
                loop = "&loop=0";
                playlistarg = "playlist?list=" + videoID + "&listType=playlist";
            }
        }
        else {
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

                parseResponse(false, videoID, top, categorie, "https://www.youtube.com/oembed?url=https://youtube.com/watch?v=" + videoID + "&format=json", text, false, false, latest, "videoholder")
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

var smallAutoMixTop;
var fullAutoMixTop;

var smallAutoMixMixed;
var fullAutoMixMixed;

var smallAutoMixNoTop;
var fullAutoMixNoTop;

function createPlayListList() {
    categorieList = getVideoListType();
    smallAutoMixTop = [];
    fullAutoMixTop = [];
    
    smallAutoMixMixed = [];
    fullAutoMixMixed = [];

    smallAutoMixNoTop = [];
    fullAutoMixNoTop = [];
    for (categorieType in categorieList) {
        smallAutoMixTop.push({ tag: categorieList[categorieType], videoIDList: "", amount: 0 });
        fullAutoMixTop.push({ tag: categorieList[categorieType], videoIDList: "", amount: 0 });
    
        smallAutoMixMixed.push({ tag: categorieList[categorieType], videoIDList: "", amount: 0 });
        fullAutoMixMixed.push({ tag: categorieList[categorieType], videoIDList: "", amount: 0 });
    
        smallAutoMixNoTop.push({ tag: categorieList[categorieType], videoIDList: "", amount: 0 });
        fullAutoMixNoTop.push({ tag: categorieList[categorieType], videoIDList: "", amount: 0 });
    }
}

async function constructPlayList(videoID, playlist, top, categorie, videoType) {
    if (playlist == false) {
        var VideoCategorieList = categorie.split(" ");
        for (categorieType in VideoCategorieList) {
            var tag = VideoCategorieList[categorieType];
            
            if(top === true){
                var objectIndex = smallAutoMixTop.findIndex(obj => obj.tag == tag);
                smallAutoMixTop[objectIndex].videoIDList += videoID + ",";
                smallAutoMixTop[objectIndex].amount += 1;

                var objectIndex = fullAutoMixTop.findIndex(obj => obj.tag == tag);
                fullAutoMixTop[objectIndex].videoIDList += videoID + ",";
                fullAutoMixTop[objectIndex].amount += 1;
                
                await CheckIfPlayListAtLimit(tag, true, false, videoType);
            }
            else
            {
                var objectIndex = smallAutoMixNoTop.findIndex(obj => obj.tag == tag);
                smallAutoMixNoTop[objectIndex].videoIDList += videoID + ",";
                smallAutoMixNoTop[objectIndex].amount += 1;

                var objectIndex = fullAutoMixNoTop.findIndex(obj => obj.tag == tag);
                fullAutoMixNoTop[objectIndex].videoIDList += videoID + ",";
                fullAutoMixNoTop[objectIndex].amount += 1;
                
                await CheckIfPlayListAtLimit(tag, false, false);
            }
            var objectIndex = smallAutoMixMixed.findIndex(obj => obj.tag == tag);
            smallAutoMixMixed[objectIndex].videoIDList += videoID + ",";
            smallAutoMixMixed[objectIndex].amount += 1;

            var objectIndex = fullAutoMixMixed.findIndex(obj => obj.tag == tag);
            fullAutoMixMixed[objectIndex].videoIDList += videoID + ",";
            fullAutoMixMixed[objectIndex].amount += 1;
            
            await CheckIfPlayListAtLimit(tag, false, true);
        }
    }
}

async function CheckIfPlayListAtLimit(tag, top, mixed, videoType, short) {
    if(top === true){
        let videoIDList = smallAutoMixTop[smallAutoMixTop.findIndex(obj => obj.tag == tag)].videoIDList;
        let videoAmount = smallAutoMixTop[smallAutoMixTop.findIndex(obj => obj.tag == tag)].amount;
        if (videoAmount >= 20) {
            smallAutoMixTop[smallAutoMixTop.findIndex(obj => obj.tag == tag)].videoIDList = "";
            smallAutoMixTop[smallAutoMixTop.findIndex(obj => obj.tag == tag)].amount = 0;
            let div_card = addCard(true, true, videoIDList, tag, false, true, videoType, short);
            addIFrame(true, videoIDList, true, tag, "Auto Mix Top : " + videoAmount, false, true, tag, "/assets/gif/logo.gif", document.getElementById("videoholder"), div_card, videoType);
        }
    }
    else if(mixed === true){
        let videoIDList = smallAutoMixMixed[smallAutoMixMixed.findIndex(obj => obj.tag == tag)].videoIDList;
        let videoAmount = smallAutoMixMixed[smallAutoMixMixed.findIndex(obj => obj.tag == tag)].amount;
        if (videoAmount >= 20) {
            smallAutoMixMixed[smallAutoMixMixed.findIndex(obj => obj.tag == tag)].videoIDList = "";
            smallAutoMixMixed[smallAutoMixMixed.findIndex(obj => obj.tag == tag)].amount = 0;
            let div_card = addCard(false, true, videoIDList, tag, false, true, videoType, short);
            addIFrame(true, videoIDList, false, tag, "Auto Mix Mixed : " + videoAmount, false, true, tag, "/assets/gif/logo.gif", document.getElementById("videoholder"), div_card, videoType);
        }
    }
    else if (top === false && mixed === false){
        let videoIDList = smallAutoMixNoTop[smallAutoMixNoTop.findIndex(obj => obj.tag == tag)].videoIDList;
        let videoAmount = smallAutoMixNoTop[smallAutoMixNoTop.findIndex(obj => obj.tag == tag)].amount;
        if (videoAmount >= 20) {
            smallAutoMixNoTop[smallAutoMixNoTop.findIndex(obj => obj.tag == tag)].videoIDList = "";
            smallAutoMixNoTop[smallAutoMixNoTop.findIndex(obj => obj.tag == tag)].amount = 0;
            let div_card = addCard(false, true, videoIDList, tag, false, true, videoType, short);
            addIFrame(true, videoIDList, false, tag, "Auto Mix No Top : " + videoAmount, false, true, tag, "/assets/gif/logo.gif", document.getElementById("videoholder"), div_card, videoType);
        }
    }
}

//Need update to playlist no top & mixed
async function setGlobalPlayList(videoType, short) {
    let categorieList = getVideoListType();
    for (categorieType in categorieList) {
        var tag = categorieList[categorieType];

        //top
        let videoIDListTop = fullAutoMixTop[fullAutoMixTop.findIndex(obj => obj.tag == tag)].videoIDList;
        let videoAmountTop = fullAutoMixTop[fullAutoMixTop.findIndex(obj => obj.tag == tag)].amount;

        let div_cardTop = addCard(true, true, videoIDListTop, tag, false, true, videoType, short);
        addIFrame(true, videoIDListTop, true, tag, "Auto Mix Top : " + videoAmountTop, false, true, tag, "/assets/gif/logo.gif", document.getElementById("videoholder"), div_cardTop, videoType);
    
        //Mixed
        let videoIDListMixed = fullAutoMixMixed[fullAutoMixMixed.findIndex(obj => obj.tag == tag)].videoIDList;
        let videoAmountMixed = fullAutoMixMixed[fullAutoMixMixed.findIndex(obj => obj.tag == tag)].amount;
        
        let div_cardMixed = addCard(false, true, videoIDListMixed, tag, false, true, videoType, short);
        addIFrame(true, videoIDListMixed, false, tag, "Auto Mix Mixed : " + videoAmountMixed, false, true, tag, "/assets/gif/logo.gif", document.getElementById("videoholder"), div_cardMixed, videoType);
    
        //NoTop
        let videoIDListNoTop = fullAutoMixNoTop[fullAutoMixNoTop.findIndex(obj => obj.tag == tag)].videoIDList;
        let videoAmountNoTop = fullAutoMixNoTop[fullAutoMixNoTop.findIndex(obj => obj.tag == tag)].amount;

        let div_cardNoTop = addCard(false, true, videoIDListNoTop, tag, false, true, videoType, short);
        addIFrame(false, videoIDListNoTop, true, tag, "Auto Mix No Top: " + videoAmountNoTop, false, true, tag, "/assets/gif/logo.gif", document.getElementById("videoholder"), div_cardNoTop, videoType);
    }
}

var stringVideoList = "";
var stringDuplicated = "";
function checkForDuplicate(videoID){
    if(stringVideoList.includes(videoID)){
        stringDuplicated += videoID + ", ";
        console.log("New duplicate found : " + videoID);
        console.log("Duplicate list : " + stringDuplicated);
    }
    else{
        stringVideoList += videoID;
    }
}