class book{
    title;
    author;
    genre;
    year;
    pages;

    constructor(t,a,g,y,p){
        this.title =t;
        this.author =a;
        this.genre = g;
        this.year =y;
        this.pages =p;
    }

    printdetails(){
        console.log(`this ${this.title} written by ${this.author}, genre ${this.genre}, published in ${this.year}, containing ${this.pages} pages`);
    }
}

const book1= new book("leymantrim","leyman","fantasy",2017,320);


book1.printdetails();