class Car{
    brand;
    model;
    year;
    price;

    constructor(b,m,y,p){
        this.brand = b;
        this.model =m;
        this.year = y;
        this.price = p;
    }
}

const car = [
    new Car("toyota","corolla",2000,50000),
    new Car("Bmw","X4",1989,70000),
    new Car("Gmc","Moti",1975,80000),
    new Car("Cadillac","l5",2021,90000),
    new Car("Audi","nm",2022,40000),
    new Car("Cheverolett","ls",2000,75000)
];
const avgPrice = car.reduce((sum,c)=> sum +c.price,0)/car.length;
console.log(avgPrice);