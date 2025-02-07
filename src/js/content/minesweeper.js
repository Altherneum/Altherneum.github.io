var minesAmount = 8;
var currentMinesAmount = 0;
var plateSizeRow = 3;
var plateSizeCol = 3;
var plateSize = plateSizeCol * plateSizeRow;
let plateMines = [];

start();
function start() {
    if (plateSizeCol < 1 || plateSizeRow < 1) {
        console.error("pas de taille de tableau logique")
        return;
    }

    if (minesAmount >= plateSize) {
        console.error("Trop de mine")
        return;
    }
    
    createPlate();
}

function createPlate() {
    for (let x = 0; x < plateSizeRow; x++) {
        plateMines[x] = [];
        for (let y = 0; y < plateSizeCol; y++) {
            
            plateMines[x][y] = 0;
        }
    }

    placeMines();

    console.warn(plateMines);

    createTable();
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
}

var platePreGen = false;
function placeMines(){
    if(!platePreGen){
        while(currentMinesAmount < minesAmount){
            var cellX = getRandomInt(0, plateSizeRow);
            var cellY = getRandomInt(0, plateSizeCol);
            console.log("Mine to test : " + plateMines[cellX][cellY]);

            if (plateMines[cellX][cellY] == 0) {
                console.log("OK 0")
                plateMines[cellX][cellY] = 1;
                currentMinesAmount++;
            }
            else if (plateMines[cellX][cellY] == 1) {
                console.log("already a mine")
            }
            else { console.log("erreur"); }
        }
        platePreGen = true;
    }
}

function createTable(){
    var table = document.createElement("table");

    var caption = document.createElement("caption");
    table.appendChild(caption);
    caption.textContent = "MineSweeper : " + (currentMinesAmount-minesAmount) + "/" + minesAmount + " mines";

    var holder = document.createElement("div");
    
    var thead = document.createElement("thead");
    table.appendChild(thead);

    var tr = document.createElement("tr");
    thead.appendChild(tr);

    for (x = 0; x < plateSizeCol + 1; x++){
        var th = document.createElement("th");
        th.scope = "col";
        th.textContent = String.fromCharCode(x+64);
        if (x == 0) {
            th.style.visibility = "hidden";
        }
        tr.appendChild(th);
    }

    var tbody = document.createElement("tbody");
    table.appendChild(tbody);

    for (x = 0; x < plateSizeRow + 1; x++){
        if(x!=0){
            var tr = document.createElement("tr");
            tbody.appendChild(tr);
        }
        var th = document.createElement("th");
        th.scope = "row";
        th.textContent = x;
        tr.appendChild(th);
        if (x == 0) {
            th.style.visibility = "hidden";
        }

        for (y = 0; y < plateSizeCol; y++){
            if(x!=0){
                var td = document.createElement("td");
                var cell = plateMines[x - 1][y];
                if (cell == 0) {
                    td.textContent = ""
                }
                else if (cell == 1) {
                    td.textContent = "💣"
                }
                else{
                    td.textContent = plateMines[x-1][y];
                }
                tr.appendChild(td);
            }
        }
        
        var th = document.createElement("th");
        th.scope = "row";
        th.textContent = x;
        tr.appendChild(th);
        if (x == 0) {
            th.style.visibility = "hidden";
        }
    }
    
    
    var thead = document.createElement("thead");
    table.appendChild(thead);

    var tr = document.createElement("tr");
    thead.appendChild(tr);

    for (x = 0; x < plateSizeCol + 1; x++) {
        var th = document.createElement("th");
        th.scope = "col";
        th.textContent = String.fromCharCode(x + 64);
        if (x == 0) {
            th.style.visibility = "hidden";
        }
        tr.appendChild(th);
    }

    var holder = document.getElementById("plate");
    holder.appendChild(table);
}