let numb = [4,5,7,8,9,44,23,12,7];
let modified_num = numb.map(n => n%2==0? n/2 : n*5);
console.log(modified_num);