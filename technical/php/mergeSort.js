function mergeSort(array) {
  if (array.length === 1) return array;

  const newArr = [...array];

  const middle = newArr.length / 2;
  const left = newArr.slice(0, middle);
  const right = newArr.slice(middle);

  return sort(mergeSort(left), mergeSort(right));
}

function sort(left, right) {
  const tempArray = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      tempArray.push(left.shift());
    } else {
      tempArray.push(right.shift());
    }
  }

  return tempArray.concat(left.slice().concat(right.slice()));
}

function binarySearch(array, n, start, stop) {
  let middle = Math.ceil((start + stop) / 2);

  if (start >= stop) {
    return -1;
  }

  if (array[middle] === n) {
    return middle;
  } else if (array[middle] > n) {
    return binarySearch(array, n, start, middle);
  } else {
    return binarySearch(array, n, middle, stop);
  }
}

console.log(mergeSort([3, 2, 6, 8, 1, 4, 5, 9, 7]));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7, 0, 9));
