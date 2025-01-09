let n = 13;
let prime = true;
for(let i = 2; i<n; i++){
    if(n%i==0){
        prime=false;
        break;
    }
}
if(prime==true){
    console.log("numb is prime");
}
else{
    console.log("numb is odd");
}


