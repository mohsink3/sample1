let student = ["khan", "simra", "nabil", "aythoun", "trish", "kurds"];

let sales = [3000, 4000, 5000];
totsale = 0;
sales.forEach((sale, i) => {
    console.log(`day ${i + 1} sales = ${sale}`);
    totsale += sale;
});
console.log(totsale);