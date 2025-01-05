fibarray = [];
fibarray.push(n)
let fiblist;


function printfib(n) {
    let first = 1;
    let second = 1;
    console.log(first);
    console.log(second);
    let sum;
    for (let i = 1; i <= n-2; i++) {
        sum = first + second;
        console.log(sum);
        first = second;
        second = sum
    }
}
printfib(9);
console.log(fibarray);




