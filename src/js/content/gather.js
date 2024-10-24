function gather(url, tries) {
    if (tries === undefined) {
        tries = 1;
    }
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            fetch(url)
                .then(response => {
                    console.log(tries);
                    console.log(response);
                    if (!response.ok || response.status !== 200) {
                        console.error(url + " : " + response.status + " : " + response.statusText);

                        if (tries >0){
                            const delay = Math.floor(Math.random() * 1000 * 60);
                            setTimeout(() => { gather(url, tries - 1); }, delay);
                        }
                    }
                    return response.json();
                })
                .then(data => {
                    resolve(data);
                    return;
                })
                .catch(error => {
                    console.warn(error);
                });
        }, 250);
    });
}

function getValues(obj, key) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getValues(obj[i], key));
        } else if (i == key) {
            objects.push(obj[i]);
        }
    }
    return objects;
}

function getValue(obj, key) {
    var value;
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (i == key) {
            value = obj[i];
            break;
        }
    }
    return value;
}