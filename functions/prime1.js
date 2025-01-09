function isprime(n){
    let prime = true;

    for(let i =2; i<n; i++){
        if(n%i==0){
            prime=false;
            break;
        }
    }
    if(prime==true){
        console.log("number is prime");
    }
    else{
        console.log("number is not prime");
    }
}
isprime(9);