class Triangle {
    base;
    height;

    constructor(b, h) {
        this.base = b;
        this.height = h;
    }

    printarea() {
        let area = (1 / 2) * this.base * this.height;
        return area;
    }
}


triangle1 = new Triangle(6, 9);
console.log(triangle1.printarea());