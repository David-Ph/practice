const sumsOfConsecutiveNumber = (x, y, n) => {
  const startingPosition = Math.floor(y / x) - x;
  const ceiling = Math.abs(y);
  
  for (let i = startingPosition; i <= ceiling; i++) {
    const consecutiveNumbers = [];
    
    for (let j = 0; j < x; j++) {
      consecutiveNumbers.push(j + i);
    }

    const sum = consecutiveNumbers.reduce((a, b) => a + b, 0);

    if (sum === y) return consecutiveNumbers[n];
  }
};

// console.log(sumsOfConsecutiveNumber(4, 14, 3)); // 5
// console.log(sumsOfConsecutiveNumber(7, 749, 5)); // 109
// console.log(sumsOfConsecutiveNumber(3, -9, 1)); // -3
// console.log(sumsOfConsecutiveNumber(5, 0, 0)); // -2
// console.log(sumsOfConsecutiveNumber(1, -256, 0)); // -2
console.log(sumsOfConsecutiveNumber(1, 706, 0)); // -2
// (14 / 4) = 3 - 4
