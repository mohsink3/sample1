function printfib(n){

    first =1;
    second = 1;
    console.log(first);
    console.log(second);
    let sum = 0;
    for(let i =1; i<=n-2;i++){
        sum = first +second;
        console.log(sum);
        first = second;
        second=sum;
    }

}
printfib(8);