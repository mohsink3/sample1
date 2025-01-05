function prifunc(n) {
    let isprime = true;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isprime = false;
            break;
        }
    }
    return isprime;

}

let arrayprime = [3, 7, 9, 2, 11];
for (let i = 0; i<arrayprime.length; i++){
    prifunc(arrayprime[i]);
    console.log();
}