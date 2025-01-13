let fib =[];
let first = 1;
let second = 1;
let n = 9;
fib.push(first,second);
for(let i = 1; i<=n-1;i++){
    let sum =first +second;
    fib.push(sum);
    second = first;
    first=sum;
}
console.log(fib);