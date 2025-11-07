main();

async function main() {
    var deviseType = "USD";

    setTokenData("BTC", deviseType);
    setTokenData("ETH", deviseType);
    setTokenData("XMR", deviseType);
    setTokenData("XRP", deviseType);
    setTokenData("ADA", deviseType);
    setTokenData("USDT", deviseType);
}

async function setTokenData(token, deviseType) {
    var price = await getPriceBinance(token, deviseType);
    var priceFormat = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: deviseType });

    setData(token, priceFormat.format(price));
}

function setData(id, data) {
    var elem = document.getElementById("prix-" + id);
    elem.textContent = data;
}

async function getPriceBlockChainAPI(token, deviseType) {
    var x = await gather('https://api.blockchain.com/v3/exchange/tickers/' + token + "-" + deviseType);
    var price = getValue(x, "last_trade_price");
    if(price !== undefined){
       return getValue(x, "last_trade_price");
    }
    else {
        return "...";
    }
}

async function getPriceBinance(token, deviseType) {
    var x = await gather("https://api.binance.com/api/v3/ticker/price?symbol=" + token + deviseType);
    var price = getValue(x, "price");
    if(price !== undefined){
       return getValue(x, "price");
    }
    else {
        return "...";
    }
}