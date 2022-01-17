function mergeSort(array) {
  if (array.length === 1) return array;
  const newArr = [...array];

  const middle = newArr.length / 2;
  const left = newArr.slice(0, middle);
  const right = newArr.slice(middle);

  return sort(mergeSort(left), mergeSort(right));
}

function sort(left, right) {
  const newArr = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      newArr.push(left.shift());
    } else {
      newArr.push(right.shift());
    }
  }

  return newArr.concat(left.slice().concat(right.slice()));
}

console.log(mergeSort([5, 3, 1, 4, 8, 9, 6, 2, 7]));
