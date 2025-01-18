
function calcfact(n) {
    let fact=1;
    for (let i = 1; i <=n; i++){
       
        fact = fact * i;
        //console.log(fact);
      

    }
    return fact;
}
let ans = calcfact(4);
console.log(ans);