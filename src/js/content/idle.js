function getTimeStamp(){
    return new Date().getTime();
}

function GetDateAtTimeStamp(timeStamp){
    return new Date(timeStamp);
}

function getNumberOfActionBetweenTimeStamps(startTimeStamp, endTimeStamp, durationPerActionInMs){
    const timeDiff = endTimeStamp - startTimeStamp;
    return Math.floor(timeDiff / durationPerActionInMs);
}

function getDurationOfAction(action, actionlvl, playerLVLWithAction){
    let duration;

    switch(action){
        case "gather":
            duration = 1000;
            break;
        case "fight":
            duration = 2000;
            break;
        case "production":
            duration = 5000;
            break;
        case "moving":
            duration = 3000;
            break;
        default:
            duration = 1000;
    }

    duration = duration * (actionlvl + 1);
    duration = duration * (1 - playerLVLWithAction);

    return duration;
}

function getPlayerGoldFromLocalStorage(){
    let storage = localStorage.getItem("playerGold");
    if(storage === null){
        return 0;
    }
    return parseInt(storage);
}

function setPlayerGoldToLocalStorage(gold){
    if(gold > 0) {
        let golds = getPlayerGoldFromLocalStorage();
        let newgold = golds + gold;
        localStorage.setItem("playerGold", newgold);

        savePlayerGoldToLocalStorage(newgold);

        document.getElementById("idlegold").innerText = formatGoldText_k_m_b_t(newgold);


        // ui message
    }
}

function GoldLootPerAction(action, actionlvl, playerLVLWithAction){
    let goldLooted;

    switch(action){
       case "gather":
            duration = 0;
            break;
        case "fight":
            duration = 1;
            break;
        case "production":
            duration = 0;
            break;
        case "moving":
            duration = 1;
            break;
        default:
            duration = 0;
    }

    goldLooted = goldLooted * (actionlvl + 1);
    goldLooted = goldLooted * (1 + playerLVLWithAction);

    return goldLooted;
}

function formatGoldText_k_m_b_t(goldValue){
    if(goldValue >= 1000){
        return "k";
    }
    else if(goldValue >= 1_000_000){
        return "m";
    }
    else if(goldValue >= 1_000_000_000){
        return "b";
    }
    else if(goldValue >= 1_000_000_000_000){
        return "t";
    }
    else{
        return goldValue.toExponential();
    }
}

function XPLootPerAction(action, actionlvl, playerLVLWithAction){
    let xpLooted;

    switch(action){
       case "gather":
            duration = 10;
            break;
        case "fight":
            duration = 10;
            break;
        case "production":
            duration = 10;
            break;
        case "moving":
            duration = 1;
            break;
        default:
            duration = 0;
    }

    xpLooted = xpLooted * (actionlvl + 1);
    xpLooted = xpLooted * (1 + playerLVLWithAction);

    return xpLooted;
}

function addXPOfAnAction(actionName, actionXP){
    let playerXP = getActionXPHandlerFromLocalStorage();

    if(playerXP[actionName]){
        playerXP[actionName] += actionXP;
    } else {
        playerXP[actionName] = actionXP;
    }

    saveActionXPHandlerToLocaStorage(playerXP);
}

function getActionXPHandlerFromLocalStorage(){
    let storage = localStorage.getItem("playerXP");
    let playerXP;

    if(storage === null){
        playerXP = {};
    }
    else{
        playerXP = JSON.parse(storage);
    }

    return playerXP;
}

function getActionXP(actionName){
    let playerXP = getActionXPHandlerFromLocalStorage();

    return playerXP[actionName] || 0;
}

function getLvlFromXPOfAction(actionName) {
    let xp = getActionXP(actionName);
    let level = 0;
    let xpForNextLevel = 100;

    while (xp >= xpForNextLevel) {
        level++;
        xp -= xpForNextLevel;
        xpForNextLevel = Math.floor(xpForNextLevel * getActionMultiplier(actionName));
    }

    return level;
}

function getActionMultiplier(actionName) {
    switch (actionName) {
        case "gather":
            return 1.5;
        case "fight":
            return 3;
        case "production":
            return 2;
        default:
            return 1;
    }
}

function saveActionXPHandlerToLocaStorage(actionXP){
    localStorage.setItem("playerXP", JSON.stringify(playerXP));
}

function getListOfItemsInInventoryFromLocalStorage(){
    let storage = localStorage.getItem("playerInventory");
    if(storage === null){
        return [];
    }
    return JSON.parse(storage);
}

function saveListOfItemsInInventoryToLocalStorage(inventory){
    localStorage.setItem("playerInventory", JSON.stringify(inventory));
}

function addQuantityOfAnItem(itemName, quantity){
    let inventory = getListOfItemsInInventoryFromLocalStorage();
    let itemIndex = inventory.findIndex(item => item.name === itemName);
    if(itemIndex !== -1){
        inventory[itemIndex].quantity += quantity;
    } else {
        inventory.push({name: itemName, quantity: quantity});
    }
    saveListOfItemsInInventoryToLocalStorage(inventory);
}

function addPickAxeToInventory(inventory){
    addQuantityOfAnItem("PickAxe", 1);
}