function primefunc(n){
    let prime=true;
    for(let i = 2; i<=n; i++){
        if(n%i==0){
            prime=false;
            break;
        }

    }
    prime ==true ? console.log(`${n} is aprime`) :console.log(`${n} is not prime`);
}
let primearr = [3,8,5,10,7];
for(let i =0; i<primearr.length;i++){
    primefunc(primearr[i]);
}