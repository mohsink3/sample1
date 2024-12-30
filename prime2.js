let n = 16;
prime = true;
for(i=2; i<n; i++){
    if(n%i==0){
        prime=false;
        break;
    }
}
if(prime==true){
    console.log("number is  prime");
}
else{
    console.log("not prime");
}
console.log(prime);