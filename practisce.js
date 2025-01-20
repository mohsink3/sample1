function factorial(n){
    let fact = 1;
    for(let i =2; i<=n; i++){
        fact = fact *i;
    }
    return fact;
}
let factarr = [5,6,7,8,9];
for(let i = 0; i<factarr.length;i++){

    console.log(`${factarr[i]}! = ${factorial(factarr[i])}`);
}