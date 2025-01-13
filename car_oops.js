class car{
    brand;
    model;
    year;

    constructor(b,m,y){
        this.brand = b;
        this.model =b;
        this.year =y;
    }

    displaydetails(){
        console.log(`this car is a ${this.brand} ${this.model} ${this.year}`);

    }
}
let mycar = new car("toyota","corolla","2025");

mycar.displaydetails();