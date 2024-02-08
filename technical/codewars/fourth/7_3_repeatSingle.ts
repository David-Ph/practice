function repeatSingle(numbers: number[]): number {
  const uniqueNumbers = {};

  numbers.forEach((num) => {
    if (uniqueNumbers[num]) {
      delete uniqueNumbers[num];
    } else {
      uniqueNumbers[num] = true;
    }
  });

  return Object.keys(uniqueNumbers)
    .map((key) => parseInt(key))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(repeatSingle([4, 5, 7, 5, 4, 8]));
