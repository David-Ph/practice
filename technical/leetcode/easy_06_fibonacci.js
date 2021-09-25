// 10 -> 0 1 1 2 3 5 8 13 21 34 == 88
function getFibonacci(number) {
  const fibonacciSequence = [];
  for (let i = 0; i < number; i++) {
    console.log(i);

    if (i < 2) {
      fibonacciSequence.push(i);
    } else {
      const prevNumber = fibonacciSequence[i - 1];
      const prevPrevNumber = fibonacciSequence[i - 2];
      const newNumber = prevNumber + prevPrevNumber;
      fibonacciSequence.push(newNumber);
    }
  }
  return sumArray(fibonacciSequence);
}

function sumArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

function fibonacciRecursion(num) {
  if (num <= 2) {
    return 1;
  }
  return fibonacciRecursion(num - 2) + fibonacciRecursion(num - 1);
}

console.log(fibonacciRecursion(5));
