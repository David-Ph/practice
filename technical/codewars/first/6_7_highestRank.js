function highestRank(arr) {
  const newArr = arr.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = {
        count: 0,
        value: parseInt(item),
      };
    }
    obj[item].count++;
    return obj;
  }, {});

  let currentHighest = {
    count: 0,
    value: 0,
  };

  for (const key in newArr) {
    if (newArr[key].count > currentHighest.count) {
      currentHighest = newArr[key];
    } else if (newArr[key].count === currentHighest.count) {
      if (newArr[key].value > currentHighest.value) {
        currentHighest = newArr[key];
      }
    }
  }

  return currentHighest.value;
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])); // 12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])); // 12
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])); // 3
