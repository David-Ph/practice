function merge(arr) {
  if (arr.length === 1) return arr;

  const middle = arr.length / 2;
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return sort(merge(left), merge(right));
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

console.log(merge([1, 6, 4, 7, 2, 9, 3, 5, 8]));
