var cursor
//Cursor trigger often on header / Content wrapper (middle part of screen)
console.log("Loading cursor");
createCursor();

async function createCursor() {
    cursor = document.createElement("div");
    cursor.id = "cursor";
    cursor.className = "cursor";
    var content = document.querySelector("html"); // add style / theme //sinon le CSS manque d'info (var-color) (matrice)
    content.appendChild(cursor);

    await include_css("/src/css/cursor.css");

    getHandler();
}

async function getHandler() {
    if (cursor === null) {
        console.warn("null cursor");
    }

    await addAllTags();
    await cursorClick();
    await moveEvent();
}

async function addAllTags() {
    var list = document.getElementsByTagName("a");
    for (i in list) {
        addHandlers(list[i]);
    }

    list = document.getElementsByTagName("button");
    for (i in list) {
        addHandlers(list[i]);
    }

    list = document.getElementById("anchor");
    for (i in list) {
        addHandlers(list[i]);
    }

    list = document.getElementsByClassName("check");
    for (i in list) {
        addHandlers(list[i]);
    }

    list = document.getElementsByTagName("input");
    for (i in list) {
        addHandlers(list[i]);
    }

    list = document.getElementsByTagName("details");
    for (i in list) {
        addHandlers(list[i]);
    }

    list = document.getElementsByTagName("summary");
    for (i in list) {
        addHandlers(list[i]); 
    }
}


async function addHandlers(item) {
    try {
        item.addEventListener("mouseenter", linkEnterHandler => {
            if (cursor != null) {
                cursor.classList.add("hover");
            }
        });
        item.addEventListener("mouseleave", linkLeaveHandler => {
            if (cursor != null) {
                cursor.classList.remove("hover");
            }
        });
    } catch (erreur) {
        // console.error(erreur);
        //debug ici / issue>
        //Changer item.addEv par window.getElement.addEvent ? Doc.addEvent? 
    }
}


async function cursorClick() {
    window.addEventListener("mousedown", () => {
        if (cursor != null) {
            cursor.classList.add("click");
        }
    });

    window.addEventListener("mouseup", () => {
        if (cursor != null) {
            cursor.classList.remove("click");
        }
    });
}

async function moveEvent() {
    document.addEventListener("mousemove", (event) => {
        if (cursor != null) {
            let mousex = event.clientX - 15;
            let mousey = event.clientY - 10;
            cursor.style.left = mousex + 'px';
            cursor.style.top = mousey + 'px';
        }
    });
}