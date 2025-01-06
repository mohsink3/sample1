let marks = [34,45,60,75,80,20,96];
//let marks2 = marks.filter(n => n>=60);
//console.log(marks2);
let marks2 = myfilt(marks);
console.log(marks2);

function myfilt(marks){
    let newmarks = [];
    for(const mark of marks){
        if(mark>=60){
            newmarks.push(mark);
        }
    }
    return newmarks;
}