let first = 1;
let second = 1;
sum = 0;
let str  = first + ' ' + second;

console.log(first);
console.log(second);

while(sum<=1000){
    sum =first +second;
    if(sum>=1000)break;
    str = str + ' ' + sum;
    first = second;
    second = sum;
}
console.log(str);