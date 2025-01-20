class rectangle{
    constructor(length,width){
        this.length = length;
        this.width = width;
    }

    calcarea(){
        let area = this.length *this.width;
        return area;
    }

    patgenerator(char){
        let pattern = '';
        for(let i =1;i<=this.length;i++){
            pattern = pattern  +char;
        }
        for(let i =1;i<=this.width;i++){
            console.log(pattern);
        }
    }
}
let result = new rectangle(5,6);
result.calcarea();
result.patgenerator("*");