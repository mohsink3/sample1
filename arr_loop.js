let students = ["mahinder", "rahul", "kumar", "john", "jacob", "kaku", "kierney"];
//for(let i =0; i<students.length;i++){
//  console.log(students[i]);
//}

//for in loop
//for(const i in students){
//console.log(students[i]);
//}

//for of loop
/*let sales = [3000,4000,5000,6000];
let totsales = 0;
for(const sale of sales){
    totsales+=sale;
}
console.log(`total sales = ${totsales}`);*/

//for each loop

let sales = [4000, 5000, 7000, 8000];
totsales = 0;

sales.forEach((sale, i) => {
    console.log(`Day ${i + 1} sales = ${sale}`);
    totsales += sale;
});
console.log(totsales);

