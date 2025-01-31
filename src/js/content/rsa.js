var privateKey;
var publicKey;

async function getRandomKey(maxBits){
    var value = 1;
    console.log("Starting generation of random prime number");
    while(!isPrime(value)){
        value = getRandomNumber(maxBits);
    }
    return value;
}
function getRandomNumber(maxBits) {
    return Math.floor(Math.random() * bitsToInt(maxBits));
}

function intToBits(value){
    return Math.round(Math.log(x)/Math.log(2) + 1);
}

function bitsToInt(maxBits){
    return Math.pow(2, maxBits)-1;
}

function isPrime(value) {
    if (value > 1) {
        for (let i = 2; i <= value / 2; i++) {
            if (value % i == 0) {
                return false;
            }
        }
        return true;
    }
    else{ return false; }
}

async function getCoprime(prime, maxBits) {
    console.log("getting coprime");
    var value = getRandomKey(maxBits);
    while (!IsFactorOf(prime, value) || value > prime) {
        value = getRandomKey(maxBits);
    } return value;
}

function IsFactorOf(prime, value) {
    if (prime % value == 0) {
        return false;
    }
    return true;
}

function gcd(a, b) {
    if (!b) {
      return a;
    }

    return gcd(b, a % b);
}

function modInverse(value, modulo) {
    if (gcd(value, modulo) > 1) {
        return -1;
    }
    
    for(let x = 1; x < modulo; x++){
        if (((value % modulo) * (x % modulo)) % modulo == 1){
            return x;
        }
    }
}
 
async function RSA(maxBits) {
    console.log("starting RSA keyGen");

    var p = await getRandomKey(maxBits);
    console.log("p = " + p);

    var q = await getRandomKey(maxBits);
    console.log("q = " + q);    

    var n = p * q;
    console.log("n = " + p + "x" + q + " = " + n);

    var phi = (p-1) * (q-1);
    console.log("phi = " + phi);

    var e = await getCoprime(phi, maxBits);
    console.log("coprime e = " + e);

    //var d = modInverse(e, phi); // seem not OK
    var d = await getPrivateKey(e, phi, maxBits);
    console.log("modInverse d = " + d);

    privateKey = {n,d};
    publicKey = { n, e };     
}

async function getPrivateKey(e, phi, maxBits) {
    var value = 2;
    while (!isPrivateKeyOK(e, phi, value)) {
        value += 1;
    }
    return value;
}

function isPrivateKeyOK(e, phi, value) {
    if ((value * e) % phi === 1) {
        return true;
    }
    return false;
}

function encrypt(value, maxBits){
    if (value < 0 || value >= publicKey.n) {
        console.error(`Condition 0 <= m < n not met. m = ${value}`);
        RSA(maxBits); encrypt(value);
    }
    
    if (gcd(value, publicKey.n) !== 1) {
        console.error("Condition gcd(value, n) = 1 not met.");
        RSA(maxBits); encrypt(value);
    }

    //var x = Math.pow(BigInt(value), BigInt(publicKey.e)) % BigInt(publicKey.n);
    var x = Number(BigInt(value) ** BigInt(publicKey.e) % BigInt(publicKey.n));
    
    //BigInt(60n ** 41n % 133n) = 72n // is OK

    return x;
    // value ** publicKey.e % publicKey.n
}

function decrypt(value){
    var x = Number(BigInt(value) ** BigInt(privateKey.d) % BigInt(privateKey.n));
    return x;
    //value ** privateKey.d % privateKey.n
}

async function test() {
    console.log("STARTING RSA TEST");
    
    var valueToCrypt = 6;
    var maxBits = 6;

    await RSA(maxBits);

    console.log("value to crypt ; " + valueToCrypt);
    
    var x1 = Math.round(encrypt(valueToCrypt, maxBits));
    console.log("---------------------- crypt  "+x1);
    var x2 = Math.round(decrypt(x1));
    console.log("---------------------- decrypt  " + x2);
    
    if (valueToCrypt === x2)
    {
        console.log("OK result");
    }
    else {
        console.log("Result NOK");
    }
}

test(); 