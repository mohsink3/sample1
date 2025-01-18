class cource{
    title;
    instructor;
    duration;
    level;
    student;

    constructor(t,i,d,l,s){
        this.title = t;
        this.instructor = i;
        this.duration =d;
        this.level =l;
        this.student = s;
    }
    printdetails(){
        console.log(`this cource ${this.title} is taught by ${this.instructor}, duration: ${this.duration} hours, level: ${this.level}, students enrolled: ${this.student}`);
    }

}

const  cource1  =new cource("programming","smitha","40","intermediate",20);

cource1.printdetails();