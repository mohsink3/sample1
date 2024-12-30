let marks = 65;
let grade;
let result;
if(marks>=80){
    grade="A";
}else if(marks>=70){
    grade="B";
}
else if(marks>=50){
    grade="C";
}
else if(marks>=40){
    grade = "D";
}
else{
    grade = "E";
}

console.log(`grade${grade}`);

switch(grade){
    case "A":
        console.log("you passed with astonishing result.you obtained first rank");
        break;


    case "B":
        console.log("you passed with distingtion");
        break;

    case "C":
            console.log("you passed with second class");
            break;

    case "D":
            console.log("you passed with third class");
            break;
    default:
        console.log("you have failed");
        break;
}
