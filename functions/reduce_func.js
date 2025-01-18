const numbers = [3,5,7,9];
let sum =numbers.reduce((num,tot)=>num +tot);
console.log(sum);
let product = numbers.reduce((n,mult)=>n*mult);
console.log(product);
let concat = numbers.reduce((n1,n2)=> `${n1}-${n2}`);
console.log(concat);