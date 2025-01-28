async function setContactNameRandom(){
    await include_script("/src/js/content/randomtext.js");

    var length = getRandomInt(6, 11);
    var name = "";

    for(var i = 0; i <= length; i++){
        var x = getRandomInt(32, 255);

        var y = intToChar(x);
        name += y;
    }
 
    var text = document.getElementById("contact-name");
    text.textContent = name;
}

function swapNameLetter(){
    var text = document.getElementById("contact-name");
    var textLength = text.textContent.length;
    
    var charToSwap = getRandomInt(0, textLength+1);
    var textContent = text.textContent;

    var newLetterValue = getRandomInt(32, 255);
    var newLetter = intToChar(newLetterValue);

    text.textContent = replaceChar(textContent, newLetter, charToSwap);
console.log(text.textContent.length);
}

//this function has an issue and randomly add new char or remove some
function replaceChar(origString, replaceChar, index) {
    let firstPart = origString.substr(0, index);
    let lastPart = origString.substr(index + 1, origString.length);
      
    let newString = firstPart + replaceChar + lastPart;
    return newString;
}

setContactNameRandom();
setInterval(swapNameLetter, 50);