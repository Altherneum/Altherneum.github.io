function sendToAPI(){
    
}

const https = require('https')

const version = 10; // https://discord.com/developers/docs/reference
const URL = "";
const token = "";
var methode = "PUT";

const options = {
    hostname: `https://discord.com/api/v` + version + `/` + URL,
    method: methode,
    headers: {
    "Content-Type": "application/json",
    'Authorization': `Bot ` + token
  }
}

const req = https.request(options, res => {
    console.log(`statusCode: ` + res.statusCode);
    res.on('data', d => {
        console.log(d)
    })
});
          
req.on('error', error => {
    console.error(error)
});

//Fin send to API function

function sendToWebHook(){
    fetch("your_webhook_url", {
        body: JSON.stringify({
        content: `type your message here`,
    }),
    headers: {
        "Content-Type": "application/json",
    },
        method: "POST",
    })
    .then(function (res) {
        console.log(res);
    })
    .catch(function (res) {
        console.log(res);
    });
}
