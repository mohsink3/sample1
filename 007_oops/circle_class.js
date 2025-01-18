class Circle{
    constructor(radius){
        this.radius = radius;
    }

    calcarea(){
        return Math.PI * this.radius *this.radius;
    }

    calcsircum(){
        return 2 * Math.PI *this.radius;
    }
}

const circle = new Circle(9);

console.log(`area: ${circle.calcarea().toFixed(2)}`);
console.log(`circumference ${circle.calcsircum().toFixed(2)}`);