let isprime = n => {
    let prime = true;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            prime = false;
            break;
        }
    }
    prime == true ? console.log(`The number ${n} is prime`) : console.log(`The number ${n} is not prime`);
}
isprime(3);
isprime(4);