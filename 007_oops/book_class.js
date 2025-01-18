class book{
    title;
    author;

    constructor(t,a){
        this.title = t;
        this.author =a
    }

    printdetails(){
        console.log(`${this.title} is written by ${this.author}`);
    }
}

const book1 = new book("atomic habits","james cameron");

book1.printdetails();