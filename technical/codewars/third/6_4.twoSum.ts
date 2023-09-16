function twoSum(numbers: number[], target: number): number[] {
  const answers: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        answers.push(i);
        answers.push(j);
        break;
      }
    }

    if (answers.length > 0) {
      break;
    }
  }

  return answers;
}

console.log(twoSum([1, 2, 3], 4)); // [0, 2]
