const students = [
    {name:"Alice",marks:75},
    {name:"Bob",marks:45},
    {name:"Charlie",marks:65},
    {name:"David",marks:85},
];

let score60 = students.filter(student => student.marks>60);
console.log(score60);

const sum = students.reduce((tot, student) => tot + student.marks, 0);
console.log(`Sum = ${sum}`);

const avg = sum/students.length;
console.log(`Avg = ${avg}`);
