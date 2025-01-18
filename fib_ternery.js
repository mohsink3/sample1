let fib = [];
for(let i =0; i<=10;i++){
    fib.push(i==0 || i==1 ? i : fib[i-1] +fib[i-2]);
}
console.log(fib);