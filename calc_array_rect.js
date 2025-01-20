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

const rect1 = new Rectangle(10,4);
const rect2 = new Rectangle(5,7);
const rect3 = new Rectangle(14,7);
const rect4 = new Rectangle(8,4);

const rectarrays = [];

rectarrays.push(rect1,rect2,rect3,rect4);
printrectangles(rectarrays);

function printrectangles(rectarrays){
    for(const rectangle of rectarrays){
        console.log(`-------rectangle details------`)
        console.log(`length - ${rectangle.length}`);
        console.log(`width - ${rectangle.width}`);
        console.log(`area - ${rectangle.calcarea()}`);
        console.log(`perimeter - ${rectangle.calcperi()}`);
        console.log(`------------\n`)

    }
}




