class rectangle{
    height;
    width;

    constructor(l,w){
        this.height =l;
        this.width = w;
    }

    calcarea(){
        let area = this.height *this.width;
        return area;
    }

    genpattern(ch){
        let pattern = '';
        let i = 1;
        while(i<this.height){ 
            i++;
            
        pattern = pattern +ch;
        }
        console.log(pattern);

        while(i<this.width){
            i++;
        }
        console.log(pattern);
   
    }

}
let rectangle1 = new rectangle(6,7);

console.log(rectangle1.calcarea());
console.log(rectangle1.genpattern("#"));