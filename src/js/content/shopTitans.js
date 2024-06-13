var APIURL = "https://smartytitans.com/api/info/";
fetchShopTitansDataStart("guilde", "64766ee4300f3e7b2917892e"); 

async function fetchShopTitansDataStart(statsType, id) {
    if (id === null || id === 'undefined') {
        console.log("get holder");
        var idHolder = document.getElementById("ShopTitansID");
        id = idHolder.value;
        if (id === null || id === 'undefined' || id === '') { 
            console.log("block return empty id");
            return;
        }
    }
    
    if (id !== null && id !== 'undefined' && id !== '') { 
        var docMenu;

        console.log("start menu");

        hideDivShopTitans(["ShopTitansData", "ShopTitansDataGuild", "ShopTitansDataInvest", "ShopTitansDataInvestVIP"]);
        hideButtons(["statsButton", "investButton", "guildButton"]);
        
        if (statsType === "stats"){
            docMenu = document.getElementById("ShopTitansData");
            docMenu.style = "display:flex";
            
            await fetchShopTitansData(id);
        }
        else if (statsType === "invest") {
            docMenu = document.getElementById("ShopTitanDataInvestMenu");
            docMenu.style = "display:flex";

            docMenu = document.getElementById("ShopTitansDataInvest");
            docMenu.style = "display:block";

            docMenu = document.getElementById("ShopTitansDataInvestVIP");
            docMenu.style = "display:block";

            await fetchShopTitansDataInvest(id);
        }
        else if (statsType === "guilde") {
            docMenu = document.getElementById("ShopTitansDataGuild");
            docMenu.style = "display:flex";
            
            await fetchShopTitansDataGuilde(id);
        }

        showButtons(["statsButton", "investButton", "guildButton"]);
    }
}

function hideButtons(id) {
    for (value in id) {
        var doc = document.getElementById(id[value]);
        doc.style = "display: none;";
    }
}

function showButtons(id) {
    for (value in id) {
        var doc = document.getElementById(id[value]);
        doc.style = "";
    }
}

function hideDivShopTitans(id) {
    for (value in id) {
        var doc = document.getElementById(id[value]);
        doc.style = "display: none;";
        cleanInsideDiv(doc);
    }
    return;
}

function cleanInsideDiv(doc) {
    doc.innerHTML = '';
}

async function fetchShopTitansDataGuilde(id) {
    var city = await gather(APIURL + 'city/' + id);
    console.log(city);

    var data = await getValue(city, "data");
    console.log(data);

    var members = await getValue(data, "members");
    console.log(members);

    var div = document.getElementById("ShopTitansDataGuild");
    var titre = document.createElement("h1");
    titre.textContent = "Guilde";
    div.appendChild(titre);

    for (value in members) {
        var member = members[value];
        var pre;
        if (member.rank === 0) {
            pre = "🐤";
        } else if (member.rank === 1) {
            pre = "👔";
        } else if (member.rank === 2) {
            pre = "👑";
        } else { pre = "???"; }

        await addData("ShopTitansDataGuild", pre, member.name);
        await addData("ShopTitansDataGuild", "ID", member._id)


        var button1 = document.createElement("button");
        var button1p = document.createElement("p");
        button1.setAttribute("onClick", "fetchShopTitansDataStart('invest', '" + member._id + "')");
        button1p.textContent = "Invest";
        button1.appendChild(button1p);
        div.appendChild(button1);

        var button2 = document.createElement("button");
        var button2p = document.createElement("p");
        button2.setAttribute("onClick", "fetchShopTitansDataStart('stats', '" + member._id + "')");
        button2p.textContent = "Stats";
        button2.appendChild(button2p);
        div.appendChild(button2);

        await addData("ShopTitansDataGuild", "Level", member.level);
        await addData("ShopTitansDataGuild", "Gold", formatCompactNumber(member.gld));
        await addData("ShopTitansDataGuild", "Investissement", formatCompactNumber(member.invst));
        await addData("ShopTitansDataGuild", "Aides de guilde", member.help);
        await addData("ShopTitansDataGuild", "Primes", member.bounty);

        await addDataHR("ShopTitansDataGuild");
    }

    //ajouter bâtiment data (même request)
    //ajouter les settings de guilde (pareil)
    //ajouter un logo ancien / nouveau (la liste membre est trié par défaut par âge en guilde)
    //bost upgrade lvl
}

async function fetchShopTitansDataInvest(id) {
    var investments = await gather(APIURL + 'player/' + id + '/investments');
    console.log(investments);

    var data = await getValue(investments, "data");
    console.log(data);

    var dataSorted = data.sort((a, b) => (a.value - b.value || a.uid.localeCompare(b.uid)));

    var div = document.getElementById("ShopTitansDataInvestVIP");
    var titre = document.createElement("h1");
    titre.textContent = "Bâtiment VIP (€)";
    div.appendChild(titre);

    var div = document.getElementById("ShopTitansDataInvest");
    var titre = document.createElement("h1");
    titre.textContent = "Bâtiment";
    div.appendChild(titre);

    for (value in dataSorted) {
        var divID;
        var VIP = investIsVIP(getValue(data[value], "uid"));
        if (VIP === true) {
            divID = "ShopTitansDataInvestVIP";
        }
        else if (VIP === false) {
            divID = "ShopTitansDataInvest";
           
        }

        var urgentInvest = false;
        var topInvest = false;
        if (value >= 0 && value <= 12) {
            urgentInvest = true;
        } if (value >= 20) {
            topInvest = true;
        }

        if (urgentInvest === true) {
            await addData(divID, "Bâtiment", getValue(data[value], "uid"));
            await addData(divID, "Click", getValue(data[value], "ticks"));
            await addData(divID, "Gold 👎", formatCompactNumber(getValue(data[value], "value")));
        } else if (topInvest === true) {
            await addData(divID, "Bâtiment", getValue(data[value], "uid"));
            await addData(divID, "Click", getValue(data[value], "ticks"));
            await addData(divID, "Gold 👌", formatCompactNumber(getValue(data[value], "value")));
        }
        else {
            await addData(divID, "Bâtiment", getValue(data[value], "uid"));
            await addData(divID, "Click", getValue(data[value], "ticks"));
            await addData(divID, "Gold", formatCompactNumber(getValue(data[value], "value")));
        }
        await addDataHR(divID);
    }
}

async function fetchShopTitansData(id) {
    var player = await gather(APIURL + 'player/' + id);
    console.log(player);
    
    var data = await getValue(player, "data");
    console.log(data);
    var stats = await getValue(data, "stats");
    console.log(stats);
    var rankGld = await getValue(data, "rankGld");
    console.log(rankGld);

    var div = document.getElementById("ShopTitansData");
    var titre = document.createElement("h1");
    titre.textContent = "Statistiques";
    div.appendChild(titre);

    var name = await getValue(data, "name");
    await addData("ShopTitansData", "Nom", name);

    var lvl = await getValue(stats, "lvl");
    await addData("ShopTitansData", "Niveau de marchand", lvl);

    var vip = await getValue(stats, "vip");
    await addData("ShopTitansData", "VIP", vip);

    await addDataHR("ShopTitansData",);

    var cityName = await getValue(data, "cityName");
    await addData("ShopTitansData", "Guilde", cityName);

    var cityLevel = await getValue(data, "cityLevel");
    await addData("ShopTitansData", "Niveau de guilde", cityLevel);

    await addDataHR("ShopTitansData",);

    var gld = await getValue(stats, "gld");
    await addData("ShopTitansData", "Gold", formatCompactNumber(gld));

    var sellfk = await getValue(stats, "sellfk");
    await addData("ShopTitansData", "Vente au roi", formatCompactNumber(sellfk));

    var invst = await getValue(stats, "invst");
    await addData("ShopTitansData", "Investissement", formatCompactNumber(invst));
    
    await addDataHR("ShopTitansData",);

    var bounty = await getValue(stats, "bounty");
    await addData("ShopTitansData", "Primes", bounty);

    var help = await getValue(stats, "help");
    await addData("ShopTitansData", "Aides de guilde", help);

    await addDataHR("ShopTitansData",);

    var accountage = await getValue(stats, "accountage");
    await addData("ShopTitansData", "Âge du compte" ,accountage);

    var accountdb = await getValue(stats, "accountdb");
    await addData("ShopTitansData", "Date du compte" , accountdb);

    await addDataHR("ShopTitansData",);

    var rank = await getValue(rankGld, "rank");
    await addData("ShopTitansData", "Rang global", rank);

    //rankStrAdv > strAdvClass,strAdvId,strAdvPow
}

async function  addData(divID, titleData, dataValue) {
    var dataHolder = document.getElementById(divID);
    var elem = document.createElement("p");
    elem.textContent = titleData + " : " + dataValue;
    dataHolder.appendChild(elem);
}

async function  addDataHR(divID) {
    var dataHolder = document.getElementById(divID);
    var elem = document.createElement("hr");
    dataHolder.appendChild(elem);
}

function investIsVIP(invest){
    if (invest === "engineer" || invest === "academy" || invest === "baker" || invest === "moondragon" || invest === "bard" || invest === "elven")
    { return true; }
    return false;
}