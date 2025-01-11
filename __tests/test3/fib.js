let first = 1;
let second = 1;
sum = 0;

console.log(first);
console.log(second);
for(let i = 1; i<=8;i++){
    sum = first +second;
    console.log(sum);
    first = second;
    second = sum;
}
