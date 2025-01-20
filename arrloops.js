let student = ["mohsin","khan","tahseen","alim","najma","abdul","sufi"];

let sales = [4000,5000,6000];
let totsales = 0;
sales.forEach( (sale,i) => { 
    console.log(`day ${i+1} sales = ${sale}`);
    totsales+=sale;
});
console.log(totsales);