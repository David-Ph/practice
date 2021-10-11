multiplicationTable = function (size) {
  const array = [];

  for (let i = 1; i <= size; i++) {
    const tempArray = [];
    for (let j = 1; j <= size; j++) {
      tempArray.push(i * j);
    }
    array.push(tempArray);
  }

  return array;
};

console.log(multiplicationTable(3));
