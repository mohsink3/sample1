let marks = [45,60,90,22,76,98];
let marks2 = myfilter(marks);
console.log(marks2);

function myfilter(marks){
    let newmarks = [];
    for(const mark of marks){
        if(mark >=50){
            newmarks.push(mark);
        }
    }
    return newmarks;

}



