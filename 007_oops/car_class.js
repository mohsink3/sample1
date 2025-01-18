class car{
brand;
model;
year;

constructor(br,mo,yr){
    this.brand = br;
    this.model = mo;
    this.year = yr;
}

displaydetails(){
    console.log(`this car is a ${this.brand} ${this.model} ${this.year}`);
 }
}
 let mycar = new car("toyota","corolla","2021");
 let car2 = new car("suzuki","dezire","2020");
 let car3 = new car("Tata","mahindra","2019");
 

 mycar.displaydetails();
 car2.displaydetails();
 car3