var size = 350; //px
var layer = 20;

spawnCube("cubeHolder");

function spawnCube(divID) {
    var cubeHolder = document.getElementById(divID);
    for (i = 0; i < 20; i++){
        var div = document.createElement("div");
        div.id = "cube" + i;
        div.className = "cube";

        var translateFormula = i * size / layer - size / 2;
        div.style.transform = "translateZ(" + translateFormula + "px)";


        var childDiv = document.createElement("div");
        div.appendChild(childDiv);

        childDiv.id = "cubeSlice" + i;
        childDiv.className = "sphereSlice"; 
        childDiv.style.animationDelay = (i * 200 + "ms");
        
        cubeHolder.appendChild(div); 
    }
}