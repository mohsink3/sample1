class Product{
    name;
    price;
    quantity;

    constructor(n,p,q){
        this.name = n;
        this.price = p;
        this.quantity = q;
    }

    calculateTotal(){
        return this.price * this.quantity;
    }

    applyDiscount(discountPerc){
        const discount = this.price * (discountPerc / 100);  // 5% = 0.05
        console.log(`Applying Discount ${discount}`);
        this.price = this.price - discount;
        console.log(`Discounted Price ${this.price}`);
    }

    restock(newQuantity){
        console.log(`Restocking product ...`);
        console.log(`Existing Quantity: ${this.quantity}`);
        this.quantity = this.quantity + newQuantity;
        console.log(`New Quantity: ${this.quantity}`);
    }
    isoutofstock(){
        if(this)
    }

    display(){
        console.log();
        console.log(`******** Product Details ********`);
        console.log(`Name: ${this.name}`);
        console.log(`Price: Rs ${this.price}`);
        console.log(`Quantity: ${this.quantity} units`);
        console.log();
    }
}

let product1  = new Product("Poco M5s Mobile",10000,10);
let product2  = new Product("tv",12000,4);
let product3  = new Product("mixi",7000,5);

// console.log(product1.display());
// console.log(product2.display());
// console.log(product3.display());
product1.display();
product1.applyDiscount(5);
product1.restock(3);

product1.display();