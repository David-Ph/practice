function isPrime(num) {
  if (num === 1) false;
  if (num === 2) true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(5));
console.log(isPrime(35));
console.log(isPrime(25));
console.log(isPrime(27));
console.log(isPrime(11));
console.log(isPrime(40));
console.log(isPrime(7));
console.log(isPrime(31));
