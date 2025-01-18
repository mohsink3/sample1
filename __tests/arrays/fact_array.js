function factorial(n){
    let answer = 1;
    for(let i =2; i<=n;i++){
        answer*=i;
    }
    return answer;
}

let fact_arr = [2,3,4,3,5];
for(let i = 0; i<fact_arr.length;i++){
    console.log(factorial(fact_arr[i]));
}