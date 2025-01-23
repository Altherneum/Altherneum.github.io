// sendMessage(10, "TOKEN", "Bot", "POST", "1328803239109464205", "Test");
function sendMessage(Version, Token, AccountType, Methode, ChannelID, Message){
    var URL = ChannelID + "/messages";
    sendToAPI(Version, Token, AccountType, Methode, URL, Message);
}

// sendToAPI(10, "TOKEN", "Bot", "POST", "", "");
function sendToAPI(Version, Token, AccountType, Methode, URL, Message){
    
    // https://discord.com/developers/docs/reference
    
    /* 
    const https = require('https')
    
    const options = {
        hostname: `https://discord.com/api/v` + Version + `/` + URL,
        method: Methode,
        headers: {
        "Content-Type": "application/json",
        'Authorization': AccountType + ` ` + Token
      },
      body: JSON.stringify(Message)
    } */
    
    fetch(`https://discord.com/api/v` + Version + `/` + URL, {
        body: JSON.stringify({
        content: Message,
    }),
    headers: {
        "Content-Type": "application/json",
        'Authorization': AccountType + ` ` + Token,
        "Access-Control-Allow-Origin": "*",
    },
        method: Methode,
    })
    .then(function (res) {
        console.log(res);
    })
    .catch(function (res) {
        console.log(res);
    });
}

// sendToWebHook("000000000000000", "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", "test", "POST");
function sendToWebHook(ServerID, Token, Message, Methode){
    fetch("https://discord.com/api/webhooks/" + ServerID + "/" + Token, {
        body: JSON.stringify({
        content: Message,
    }),
    headers: {
        "Content-Type": "application/json",
    },
        method: Methode,
    })
    .then(function (res) {
        console.log(res);
    })
    .catch(function (res) {
        console.log(res);
    });
}