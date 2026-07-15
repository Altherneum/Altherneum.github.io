var filmLinks = [
    {
        "filmID": "45264",
        "category": "todo",
        "note": "5",
        "title": "",
        "description": "",
        "imageURL": "",
    },
];

var FilmListType = ["todo", "film", "animes", "series", "towatch"];

function getVideoListType(){
    return FilmListType;
}

function GetVideoList(){
    return filmLinks;
}

function getType(){
    return "film";
}

function getEmoji(FilmListType){
    switch (FilmListType) {
        case 'todo':
            return "⏰";
        case 'film':
            return "🎬";
        case 'animes':
            return "🖌";
        case 'series':
            return "📽";
        case 'towatch':
            return "👀";
        default:
            return "❓";
      }
}

function showFilm(categorie){
    let mainDiv = document.getElementsByClassName("filmsID");
    for(link in filmLinks){
        if(filmLinks[link].category === categorie){
            console.log(filmLinks[link]);

            let div = document.createElement("div");

            let imgTop = document.createElement("img");
            let a = document.createElement("a")
            let img = document.createElement("img");
            let text = document.createElement("p");

            div.className = "card " + getNote(filmLinks[link].note);

            imgTop.className = "svg";

            a.href = "https://www.allocine.fr/film/fichefilm_gen_cfilm=" + filmLinks[link].filmID;
            a.innerHTML = filmLinks[link].title;

            img.src = filmLinks[link].imageURL;

            text.innerHTML = filmLinks[link].description;

            div.appendChild(imgTop);
            div.appendChild(a);
            div.appendChild(img);
            div.appendChild(text);

            mainDiv[0].appendChild(div);
        }
    }
}

function getNote(note){
    switch(note){
        case 0:
            return "zero";
        case 1:
            return "zero";
        case 2:
            return "bad";
        case 3:
            return "medium";
        case 4:
            return "best";
        case 5:
            return "love";
        default:
            return "unknow";
    }
}