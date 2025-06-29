var JSONFile;
var FramesJSON;
var maxFrames = 0;
var frameNumber = 1;

start("earth");

async function start(animationName){
    console.log("starting");
    await GetFile(animationName);
    setInterval(StreamAllFrames, 100);
}

async function GetFile(fileName){
    console.log("running");

    if(JSONFile === undefined){
        JSONFile = await fetch("/assets/txt/frames/" + fileName + ".json");
    }

    if(FramesJSON === undefined){
        FramesJSON = await JSONFile.json();
    }

    maxFrames = Object.keys(FramesJSON.animation).length;
}

async function runFrames(frameNumber){    
    document.getElementById("frames-textarea").textContent = await getFrame(frameNumber);

    console.log("Frame run ended")
}

async function getFrame(frameNumber){
    return FramesJSON.animation[frameNumber];
}

async function StreamAllFrames(){
    frameNumber++;
    if(frameNumber > maxFrames){
        frameNumber = 1;
    }

    await runFrames(frameNumber);
}

console.log("end")