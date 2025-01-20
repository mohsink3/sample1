const students = [
    { name: "Alice", marks: 75 },
    { name: "Bob", marks: 45 },
    { name: "Charlie", marks: 65 },
    { name: "David", marks: 85 },
  ];

  const score60 = students.filter(student => student.marks>60);
  console.log(score60);
  const sum = students.reduce((tot, n)=> tot+ n.marks);
  //const avg = students.reduce((tot, a)=>tot/a.marks);
  console.log(sum);