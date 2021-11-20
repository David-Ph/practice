const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

function numPrimorial(n, count = 1) {
  if (n === 0) {
    return 1;
  }

  if (isPrime(count)) {
    return count * numPrimorial(n - 1, count + 1);
  } else {
    return numPrimorial(n, count + 1);
  }
}

function factorial(n) {
  if (n === 1) {
    return n;
  }

  return n * factorial(n - 1);
}

console.log(numPrimorial(5)); // 2*3*5*7*11 2310
// console.log(factorial(4));
