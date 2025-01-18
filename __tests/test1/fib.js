let first = 1;
let second = 1;
console.log(first);
console.log(second);
let sum;
let i = 1;
while (i <= 1000) {
    sum = first + second;
    if (sum >= 1000) {
        break;
    }
    console.log(sum);
    first = second;
    second = sum;

    i++;
}


