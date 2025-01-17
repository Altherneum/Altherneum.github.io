const https = require('https')

const version = 6;
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
