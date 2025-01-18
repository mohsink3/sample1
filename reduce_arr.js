//const numbers = [1,2,3,4,5];
//const sum = numbers.reduce((tot,n) =>tot +n);

//console.log(sum);

let sales = [13000,12000,4000];
let totsum= 0;
sales.forEach((sale,i)=>{
    console.log(`day ${i+1} sales ${sale}`);
    totsum =totsum +sale;
});
console.log(totsum);