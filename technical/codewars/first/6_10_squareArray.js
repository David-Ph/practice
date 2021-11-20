function comp(array1, array2) {
  if (!array1 || !array2) return false;

  let result = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] * array1[i] === array2[j]) {
        result.push(true);
        array2.splice(j, 1);
        break;
      }
    }
  }
  return result.length === array1.length && array2.length === 0;
}
let a = [121, 144, 19, 161, 19, 144, 19, 11];
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(comp(a, b));

let c = [0, 7, 7, 6, 5, 9, 6, 4, 1, 4, 9, 0, 1];
let d = [36, 16, 36, 0, 25, 0, 82, 81, 16, 49, 1, 1, 49];

console.log(comp(c, d));

console.log(comp([], null));
