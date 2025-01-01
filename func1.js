
function calcfact(n) {
    let fact = 1;
    for (let i = n; i >= 1; i--) {
        fact = fact * i;
        console.log(i);
    }
    return fact;
}
let ans = calcfact(6);
console.log(ans);


