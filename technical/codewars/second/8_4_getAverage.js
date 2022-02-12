function find_average(array) {
  if (!array) return 0;

  return (
    array.reduce((total, val) => {
      return (total += val);
    }, 0) / array.length
  );
}

console.log(find_average([1, 2, 3, 4, 5]));
console.log(find_average([1, 2, 3, 4]));
