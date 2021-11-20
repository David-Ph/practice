function persistence(num) {
  if (num.toString().length < 2) {
    return 0;
  }

  let count = 0;
  let string = num.toString().split("");

  while (string.length > 1) {
    let total = 1;
    for (let i = 0; i < string.length; i++) {
      total *= string[i];
    }
    string = total.toString().split("");
    count++;
  }

  return count;
}

console.log(persistence(39)); // 3
console.log(persistence(4)); // 0
console.log(persistence(25)); // 2
console.log(persistence(999)); // 4
