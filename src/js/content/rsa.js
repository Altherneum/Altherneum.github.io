function getRandomKey(maxBits){
    var value = 1;
    while(!isPrime(value)){
        value = Math.floor(Math.random() * bitsToInt(maxBits));
    }
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

function getCoprime(prime){
    var value = 1;
    while(value == prime && gcd(value, prime) == 1){
        value = getRandomKey();
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
    
    for(let x = 1; x < m; x++){
        if (((a % m) * (x % m)) % m == 1){
            return x;
        }
    }
}

function RSA(maxBits){
    var p = getRandomKey(maxBits);
    var q = getRandomKey(maxBits);

    var n = p*q;

    var phi = (p-1) * (q-1);

    var e = getCoprime(phi);
    var d = modInverse(e, phi);

    var privateKey = [n,d];
    var publicKey = [n, e];
}

function encrypt(value, e, n){
    return (Math.pow(value, e) % n)
}

function decrypt(value, d, n){
    return (Math.pow(value, d) % n);
}

/*

TEST :
#
P=11
Q=13
n=143
phi(n)=120
e=17
d=113

Crypt:
#
value=88

c = 88^17 mod 143 = 121

Decrypt:
#
value=121
m = 121^113 mod 143 = 88
*/