// @params array number
function mergeSort(array) {
  if (array.length === 1) return array;

  const middle = array.length / 2;
  const left = array.slice(0, middle);
  const right = array.slice(middle);

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

console.log(mergeSort([5, 2, 3, 1, 4, 9, 7, 6, 8]));
