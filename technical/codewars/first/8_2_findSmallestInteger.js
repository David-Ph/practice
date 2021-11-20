function mergeSort(array) {
  if (array.length === 1) return array;

  const newArr = Array.from(array);

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

function findSmallestInt(args) {
  //   return mergeSort(args)[0];
  let smallest = args[0];
  for (let i = 0; i < args.length; i++) {
    if (args[i] < smallest) smallest = args[i];
  }
  return smallest;
}

console.log(findSmallestInt([34, 15, 88, 2]));
console.log(findSmallestInt([34, -345, -1, 100]));
