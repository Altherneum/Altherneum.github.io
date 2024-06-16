var input = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent justo erat, imperdiet eu sapien et, sodales placerat tellus. Mauris in risus dictum, dictum erat et, efficitur felis. Suspendisse egestas, metus id tempus blandit, quam ante feugiat risus, quis mattis nulla massa fringilla metus. Quisque sit amet odio mauris. Cras vel turpis aliquet, facilisis odio sed, maximus metus. Aliquam at maximus urna. Sed vestibulum et quam id gravida. Nunc accumsan lacus eget orci elementum, et tincidunt dui porttitor";

addText(input);

async function addText(text) {
    var console_text = document.getElementById("console-body-text");
    for (char in text) {
        console_text.innerHTML += text[char];

        if (text[char] == " ") {
            await sleep(getRandomInt(5) * 100);
        }
        else if (text[char] == ".") {
            await breakLine();
            await sleep(getRandomInt(75) * 10);
        }
        else {
            await sleep(getRandomInt(30) * 10);
        }
    }
} 

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function breakLine() {
    var console_text = document.getElementById("console-body-text");
    console_text.innerHTML += "<br>";
}