const numbers = [4, 7, 12, 15, 9];

modifiednumbers = numbers.map(n => n % 2 == 0 ? n * 2 : n + 1);
console.log(modifiednumbers);

numberdescription = numbers.map(n => n % 2 == 0 ? 'even' : 'odd');
console.log(numberdescription);
    

