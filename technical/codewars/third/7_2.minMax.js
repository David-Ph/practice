function minMax(arr) {
  let min = arr[0];
  let max = arr[0];

  arr.forEach((el) => {
    if (el <= min) {
      min = el;
    }
    if (el >= max) {
      max = el;
    }
  });

  return [min, max];
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([23535, 5]));
