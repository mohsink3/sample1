function isprime(n){
    let prime =true;
    for(let i = 2; i<n; i++){
        if(n %i==0){
            prime=false;
            break;
        }
    }
    return prime;
}
let n=4;
isprime(n)? console.log(`${n} is prime`) : console.log(`${n} is not prime`);