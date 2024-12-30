let num = 3;
let isprime=true;
for(let i = 2; i<num; i++){
    if(num%i==0){
        isprime=false;
        break;
    }
}
if(isprime == true) {
    console.log(" the  number is prime");
}
else{
    console.log("the number is not prime");
}
console.log(isprime);
   
