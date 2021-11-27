function productFib(prod) {
  // ...
  const fibonacci = [0, 1];
  let total = 0;

  while(1){
    const lastEl = fibonacci[fibonacci.length - 1];
    const secondLastEl = fibonacci[fibonacci.length - 2];

    total = lastEl * secondLastEl;

    if(total === prod){
        return [secondLastEl, lastEl, true];   
    }else if(total > prod){
        return [secondLastEl, lastEl, false];
    }

    const newFibonacci = lastEl + secondLastEl;
    fibonacci.push(newFibonacci);
  }
}

console.log(productFib(714)); // [21, 34, true]
console.log(productFib(800)) // [34, 55, false]
console.log(productFib(4895)) // [55, 89, true]

function mergeSort(array) {
  if (array.length === 1) return array;

  const middle = Math.floor(array.length / 2);
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

//   console.log(mergeSort([6, 2, 9, 7, 1, 3, 4, 5, 8]));
