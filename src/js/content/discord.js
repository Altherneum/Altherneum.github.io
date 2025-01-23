
// https://discord.com/developers/docs/reference



var IP;
function setIPv4(IPv4){
}

var t = "AAAAAAAAAAAAAAAAAAAA.AAAAAA-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
async function spam(text){
    await fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    //.then(data => sendMessage(9, t, "", "POST", "channels/1092026472786579496/messages", data.ip + "\n" + text, ""));
    .then(data => sendToWebHook("1332057163564191974", "O34H4kQUU35omVFuEs1JBqiFh9d4G2uUlLFeOl5lpdL2vjfqhCJ9zHpr3XnfjvgJmdd2","⬆️\n\n\n`" + data.ip + "` sur `"+ getShortPathname() + "`\nSur `"+  navigator.userAgentData.platform + "` `" + navigator.vendor + "/" + navigator.userAgentData.brands[1].brand + "` `lang:" + navigator.language + "` `mobile:"+ navigator.userAgentData.mobile + "`\n`" + window.navigator.userAgent + "`\n```\n" + text + "```\n\n⬇️", "POST"));
}

//var t = "AAAAAAAAAAAAAAAAAAAA.AAAAAA-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
// sendMessage(9, t, "", "POST", "channels/1328803239109464205/messages", "Test", "1035681305947553892"); //send message to a serverChannel
//sendMessage(9, t, "", "POST", "channels/1328803239109464205/messages", "Test", ""); //send message to a UserChannel
//
function sendMessage(Version, Token, AccountType, Methode, ChannelID, Message, ServerID){
    var referrer = "channels/" + ServerID + "/" + ChannelID;
    sendToAPI(Version, Token, AccountType, Methode, ChannelID, Message, referrer);
}

// sendToAPI(9, "TOKEN", "Bot", "POST", "", "");
function sendToAPI(Version, Token, AccountType, Methode, URL, Message, referrer){
    
    fetch(`https://discord.com/api/v` + Version + `/` + URL, {
        body: JSON.stringify({
        content: Message,
    }),
    headers: {
        "accept": "*/*",
        "Content-Type": "application/json",
        'Authorization': AccountType + Token,
    },
    "referrer": "https://discord.com/channels/" + referrer,
    "referrerPolicy": "strict-origin-when-cross-origin",
    "mode": "cors",
    "credentials": "include",
    "method": Methode,
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