function sortArray(array) {
  const odds = array.filter((num) => num % 2 !== 0);
  const evens = array
    .map((num, index) => ({ num, index }))
    .filter((num) => num.num % 2 === 0);

  const results = odds.sort((a, b) => a - b);

  evens.forEach((num) => {
    results.splice(num.index, 0, num.num);
  });

  return results;
}

console.log(sortArray([5, 8, 6, 3, 4])); // 3 8 6 5 4
