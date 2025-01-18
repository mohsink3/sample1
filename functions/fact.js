function printfact(n){
    let fact =1;
    for(let i =2; i<=n;i++){
        fact *=i;
    }
    return fact;
}
let ans = printfact(4);
console.log(ans);