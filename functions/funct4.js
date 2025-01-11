
function calcfact(n) {
    let fact = 1;
    for (let i = 2; i >= n; i--) {
        fact = fact * i;

    }
    return fact;
}
let ans = calcfact(4);
console.log(ans);