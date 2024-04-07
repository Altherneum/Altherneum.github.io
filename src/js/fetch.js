include(); async function include() {
    await include_script("/src/js/index.js");
}

async function include_multiple(name, area) {
    await include_css("/src/css/" + name + ".css");
    await include_html("/src/html/content/" + name + ".html", area, true);
    await include_script("/src/js/" + name + ".js");
}

async function include_html(link, query, queryOrIndex) {
    let response = await fetch(link)
        .then(response => {
            return response.text()
        })
        .then(data => {
            if (queryOrIndex) {
                document.getElementById(query).innerHTML += data;
            } else {
                document.querySelector(query).innerHTML += data;
            }
        })
        .catch(error => {
            console.log(error);
        });
}

async function include_script(url) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.head.appendChild(script);

    return new Promise((res, rej) => {
        script.onload = function () {
            res();
        }
        script.onerror = function () {
            rej();
        }
    });
}

async function include_css(url) {
    var head = document.getElementsByTagName('HEAD')[0];

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;

    head.appendChild(link);
}