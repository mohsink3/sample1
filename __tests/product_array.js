const products = [{
    name:"laptop",price:50000,stock:15},
    {name:"mobile",price:15000,stock:8},
    {name:"headphone",price:2000,stock:20},
    {names:"keyboard",price:1000,stock:5}];

const product1 = products.filter(product => product.stock>10);
const product2 = products.map(product =>product.price *0.15);
console.log(products);
console.log(product1);
console.log(product2);