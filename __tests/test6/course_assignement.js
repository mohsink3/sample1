class Cource{
    title;
    instructor;
    duration;
    level;
    constructor(t,i,d,l){
        this.title = t;
        this.instructor=i;
        this.duration =d;
        this.level = l;
    }
}

const course1 = [
    new Cource("Html","Anjath",4,"beginner"),
    new Cource("Advanced webdesign","Kumar",23,"intermediate"),
    new Cource("Css","Khan",6,"beginner"),
    new Cource("React","John",11,"Advanced"),
    new Cource("MsExcel","Manjunath",6,"beginner"),
];
const totduration = course1.reduce((sum,cource)=>sum +cource.duration,0);
console.log(totduration);

const filtercource = course1.filter(course => course.level=="beginner");
console.log(filtercource);