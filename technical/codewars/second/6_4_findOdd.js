function isOdd(n) {
  return n % 2 !== 0;
}

// function findOdd(A) {
//   const collection = {};

//   A.forEach((n) => {
//     if (!collection[n]) {
//       collection[n] = 1;
//     } else {
//       collection[n]++;
//     }
//   });

//   for (const n in collection) {
//     if (isOdd(collection[n])) return +n;
//   }
// }

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
