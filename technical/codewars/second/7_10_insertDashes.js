function isOdd(num) {
  return num % 2 !== 0;
}

function insertDash(num) {
  const newArr = [];

  num.toString().split('').forEach((n, i, arr) => {
    newArr.push(n);

    if (isOdd(n) && arr[i + 1] && isOdd(arr[i + 1])) {
      newArr.push("-");
    }
  });

  return newArr.join("");
}

console.log(insertDash(454793)); // 4547-9-3
