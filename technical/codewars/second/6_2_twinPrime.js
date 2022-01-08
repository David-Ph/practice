function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function isTwinPrime(n) {
  if (!isPrime(n)) return false;

  if (!isPrime(n - 2) && !isPrime(n + 2)) return false;

  return true;
}

console.log(isTwinPrime(5));
console.log(isTwinPrime(7));
console.log(isTwinPrime(9));
console.log(isTwinPrime(953));
console.log(isTwinPrime(25));
console.log(isTwinPrime(0));
