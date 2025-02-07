var minesAmount = 5;
var currentMinesAmount = 0;
var plateSizeRow = 5;
var plateSizeCol = 5;
var plateSize = plateSizeCol * plateSizeRow;
let plateMines = [];

function createPlate(){
    for (let x = 0; x < plateSizeRow; x++) {
        plateMines[x] = [];
        for (let y = 0; y < plateSizeCol; y++) {
            
            plateMines[x][y] = 0;
        }
    }

    placeMines();

    console.warn(plateMines);
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
            plateMines[cellX][cellY] = 1;
            currentMinesAmount++;
        }
        platePreGen = true;
    }
}

createPlate();
createTable()
function createTable(){
    var table = document.createElement("table");

    var caption = document.createElement("caption");
    table.appendChild(caption);
    caption.textContent = "A";

    var thead = document.createElement("thead");
    table.appendChild(thead);

    var tr = document.createElement("tr");
    thead.appendChild(tr);

    for(x = 0; x < plateSizeCol; x++){
        var th = document.createElement("th");
        th.scope = "col";
        th.textContent = x;
        tr.appendChild(th);
    }

    var holder = document.getElementById("plate");
    holder.appendChild(table);
}