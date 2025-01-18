let sales = [];
sales.push(1000,2000,3000);
sales.unshift(500);

let lastsale = sales.pop();
console.log(`last element is ${lastsale}`);
console.log(sales);
let totsales =0;

for(let i =0; i<sales.length;i++){
    totsales =totsales +sales[i];
    console.log(totsales);
}
console.log(sales);
console.log(totsales);