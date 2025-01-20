let student = ["khan","munir","mohin","karm","john","victor","raju","kiran"];

let sales = [4000,5000,6000];
let totsale = 0;
sales.forEach((sale,i)=>{
    console.log(`day ${i+1} sales = ${sale}`);
    totsale+=sale;
});
console.log(totsale);