// var maxSequence = function (arr) {
//   let currentHighest = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i, subSum = 0; j < arr.length; j++) {
//       subSum += arr[j];
//       currentHighest = Math.max(subSum, currentHighest);
//     }
//   }
//   return currentHighest;
// };
var maxSequence = function (arr) {
  let currentSum = 0;

  return arr.reduce((maxSum, value) => {
    currentSum = Math.max(currentSum + value, 0);
    return Math.max(currentSum, maxSum);
  }, 0);
};
console.log(maxSequence([])); // 0
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(
  maxSequence([
    7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43,
  ])
); // 155
