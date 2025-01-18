function printfact(n){
    let fact =1;
    for(let i =2; i<=n; i++){
        fact *=i;
    }
    return fact;
}
let n =5;
console.log(`factorial of ${n} = ${printfact(n)}`);