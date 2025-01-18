class Rectangle {
    // Constructor method to initialize the properties
    constructor(length, width) {
      this.length = length; // Property: length of the rectangle
      this.width = width;   // Property: width of the rectangle
    }

    calcarea(){
        let area = this.length *this.width;
        return area;
    }

    calcperi(){
        let perimeter = 2 *(this.length +this.width);
        return perimeter;
    }
}

const rect = new Rectangle(10,4);
console.log(rect.calcarea());
console.log(rect.calcperi());