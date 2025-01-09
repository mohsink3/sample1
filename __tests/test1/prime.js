let numb = 8;
let prime = true;

for (i = 2; i < numb; i++) {
    if (numb % i == 0) {
        prime = false;
        break;
    }
}
if (prime == true) {
    console.log(`${numb} is a prime number`);
}
else {
    console.log(`${numb} is not a prime number`);
}