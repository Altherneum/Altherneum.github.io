var privateKey;
var publicKey;

function getRandomKey(maxBits){
    var value = 1;
    while(!isPrime(value)){
        value = Math.floor(Math.random() * bitsToInt(maxBits));
        console.log("trying random key : " + value);
    }
    console.log(value + " is prime");
    return value;
}

function intToBits(value){
    return Math.round(Math.log(x)/Math.log(2) + 1);
}

function bitsToInt(maxBits){
    return Math.pow(2, maxBits)-1;
}

function isPrime(value){
    if (value > 1) {
        for (let i = 2; i <= value/2; i++) {
            if (value % i == 0) {
                return false;
            }
        }
        return true;
    }
    else{ return false; }
}

function getCoprime(prime, maxBits){
    var value = prime;
    while(value == prime && gcd(value, prime) != 1){
        value = getRandomKey(maxBits);
    }
    return value;
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
 
function RSA(maxBits){
    var p = getRandomKey(maxBits);
    console.log("p = " + p);
    
    var q = getRandomKey(maxBits);
    console.log("q = " + q);

    var n = p*q;
    console.log("n = " + n);

    var phi = (p-1) * (q-1);
    console.log("phi = " + phi);

    var e = getCoprime(phi, maxBits);
    console.log("coprime e = " + e);
    var d = modInverse(e, phi);
    console.log("modInverse d = " + d);

    privateKey = {n,d};
    publicKey = {n, e};
}

function encrypt(value){
    if (value < 0 || value >= publicKey.n) {
        throw new Error(`Condition 0 <= m < n not met. m = ${value}`);
    }
    
    if (gcd(value, publicKey.n) !== 1) {
        throw new Error("Condition gcd(value, n) = 1 not met.");
    }

    var x = Math.exp(value, publicKey.e) % publicKey.n;
    console.log("x = " + x);
    return x;
    // value ** e % n
}

function decrypt(value){
    var x = Math.exp(value, privateKey.d) % privateKey.n;
    console.log("x = " + x);
    return x;
    //value ** d % n
}


RSA(8);
var x1 = Math.round(encrypt(17));
console.log(x1);
var x2 = Math.round(decrypt(x1));
console.log(x2);