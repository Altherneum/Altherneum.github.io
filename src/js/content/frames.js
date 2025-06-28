console.log("starting")
setInterval(StreamAllFrames, 100);

var JSONFile;
var FramesJSON;
var maxFrames = 0;

async function GetFile(fileName, frameNumber){
    console.log("running")

    if(JSONFile === undefined){
        JSONFile = await fetch("/assets/txt/frames/" + fileName + ".json");
    }

    if(FramesJSON === undefined){
        FramesJSON = await JSONFile.json();
    }

    maxFrames = Object.keys(FramesJSON.animation).length;

    return await FramesJSON.animation[frameNumber];
}

async function runFrames(frameNumber){    
    var frame = await GetFile("earth", frameNumber, "parrot");
    document.getElementById("frames-textarea").textContent = frame;

    console.log("Frame run ended")
}

var frameNumber = 1;
async function StreamAllFrames(){
    frameNumber++;
    if(frameNumber > maxFrames){
        frameNumber = 1;
    }

    console.log(frameNumber + " / " + maxFrames)
    runFrames(frameNumber);
}

console.log("end")