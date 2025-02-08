var minesAmount = 10;
var currentMinesAmount = 0;
var plateSizeRow = 10;
var plateSizeCol = 8;
var plateSize = plateSizeCol * plateSizeRow;
let plateMines = [];
var cheat = false;

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

            if (plateMines[cellX][cellY] == 0) {
                plateMines[cellX][cellY] = 1;
                currentMinesAmount++;
            }
            else if (plateMines[cellX][cellY] == 1) {
            }
            else { console.log("erreur placeMine"); }
        }
        platePreGen = true;
    }
}

function createTable(){
    var table = document.createElement("table");
    table.addEventListener("contextmenu", e => { e.preventDefault(); });

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
        th.textContent = (x-1);
        tr.appendChild(th);
        if (x == 0) {
            th.style.visibility = "hidden";
        }

        for (y = 0; y < plateSizeCol; y++){
            if(x!=0){
                var td = document.createElement("td");

                setMineText(x-1, y, td);

                // add click event
                setMineClick(td);

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

function setMineText(x, y, td) {
    var cell = plateMines[x][y];
    if (cell == 0) {
        td.textContent = " "; //No mine not discovered
        td.style.background = "var(--main-color)";
    }
    else if (cell == 1) {
        if (!cheat) {
            td.textContent = " "; //Mine no cheat
            td.style.background = "var(--main-color)";
        }
        else {
            td.textContent = "💣"; //Mine Cheater
        }
    }
    else if (cell == 2) {
        td.textContent = "💣"; //Mine visible
    }
    else if (cell == 3) {
        td.textContent = "🚩"; //Nothing under
    }
    else if (cell == 4) {
        td.textContent = "🚩"; //Mine under
    }
    else if (cell == 5) {
        var text = getNearbyBomb(x, y);
        if (text == 0) {
            td.textContent = " ";
        }
        else { td.textContent = text; }
        td.style.background = "var(--background-color)";
    }
    else if (cell == 6) {
        td.textContent = "💀"; // Loosed
    }
    else {
        td.textContent = plateMines[x - 1][y];
    }
}

function setMineClick(td) {
    td.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        var cellPose = getPoseOfCell(this);
        var x = (cellPose.x - 1);
        var y = (cellPose.y - 1);

        setFlag(x, y, td);
    }, false);

    td.addEventListener("click", function (e) {
        var cellPose = getPoseOfCell(this);
        var x = (cellPose.x - 1);
        var y = (cellPose.y - 1);

        clickCell(x, y, td, true);
    });
}

function getPoseOfCell(td) {
    return {
        "x": (td.parentElement.rowIndex - 1),
        "y": td.cellIndex,
    };
}

function setFlag(x, y, td) {
    var cell = plateMines[x][y];
    if (cell == 0) {
        plateMines[x][y] = 3;
    }
    else if (cell == 1) {
        plateMines[x][y] = 4;
    }
    else if (cell == 3) {
        plateMines[x][y] = 0;
    }
    else if (cell == 4) {
        plateMines[x][y] = 1;
    }

    setMineText(x, y, td);
}

function clickCell(x, y, td, human) {
    var cell = plateMines[x][y];
    if (cell == 0 || cell == 3) {
        plateMines[x][y] = 5;
    }
    else if (cell == 1 || cell == 2 || cell == 4) {
        plateMines[x][y] = 6;
        //Game Over screen
    }

    if(human){
        autoUnlockNearbyZone(x, y, td, true);
    }

    setMineText(x, y, td);
}

function getNearbyCell(x, y) {
    var plateMinesToCheck = new Array();
    for (i = -1; i < 2; i++) {
        for (i2 = -1; i2 < 2; i2++) {
            var cellToCheck = new Array();
            var x2 = x - i;
            var y2 = y - i2;

            if (x2 >= 0 && x2 < plateSizeRow && y2 >= 0 && y2 < plateSizeCol) {
                cellToCheck[0] = x2;
                cellToCheck[1] = y2;

                plateMinesToCheck.push(cellToCheck)
            }
        }
    }
    return plateMinesToCheck;
}

// Dont work & last step
// script run in weird order and go down on path only and stop randomely
function autoUnlockNearbyZone(x, y, td, firstRun) {
    var cell = plateMines[x][y];
    if (cell == 0 || cell == 3 || (cell == 5 && firstRun)) {
        var mineAmout = getNearbyBomb(x, y);
        clickCell(x, y, td, false);

        if (mineAmout < 1) { 
            var cells = getNearbyCell(x, y);
             for (j = 0; j < cells.length; j++) {
                 var newX = cells[j][0];
                 var newY = cells[j][1];

                 autoUnlockNearbyZone(newX, newY, getTD(newX, newY), false);}
        }
    }
}

function getNearbyBomb(x, y) {
    var count = 0;

    var list = getNearbyCell(x, y);
    for (j = 0; j < (list.length); j++) {
        var x = list[j][0];
        var y = list[j][1];

        var cell = plateMines[x][y];
        if (cell == 1 || cell == 2 || cell == 4 || cell == 6) {
            count++;
        }
    }
    return count;
}

function getTD(x, y) {
    var plate = document.getElementById("plate");
    var table = plate.querySelector("table");
    var tbodys = table.querySelector("tbody");
    var trs = tbodys.querySelectorAll("tr");
    var tds = trs[x].querySelectorAll("td");
    var td = tds[y];
    return td;
}