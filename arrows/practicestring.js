const strings = ["apple", "banana", "cherry", "date", "elderberry", "fig","grape"];

const longString = strings.filter(str=>str.length>5);
console.log(longString);

const upperCaseString = strings.map(str => str.toUpperCase());
console.log(upperCaseString);

const containsA = strings.filter(str => str.startsWith("a"));
console.log(containsA);