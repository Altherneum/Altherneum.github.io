function redirect(path) {
    var link = document.getElementById("linksrc");
    link.textContent = path;

    path = "https://" + path;

    link.href = path;

    setTimeout(() => {
        document.location.href = path;
    }, 5000);
    
    var link = document.getElementById("link");
    link.href = path;
}