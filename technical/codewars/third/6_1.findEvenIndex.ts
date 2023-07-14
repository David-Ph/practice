function sumArr(arr: number[]): number {
  return arr.reduce((current, value) => current + value, 0);
}

function findEvenIndex(arr: number[]): number {
  let result = -1;

  for (let i = 0; i < arr.length; i++) {
    const leftArr = arr.slice(0, i);
    const rightArr = arr.slice(i);

    if (rightArr.length > 0) {
      rightArr.shift();
    }

    const leftSum = sumArr(leftArr);
    const rightSum = sumArr(rightArr);

    if (leftSum === rightSum) {
      result = i;
    }
  }

  return result;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35])); // 0
