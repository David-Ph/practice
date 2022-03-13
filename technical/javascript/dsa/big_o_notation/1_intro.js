/* 
write a function that calculates the sum of all numbers from 1 up to n
*/

// approach 1
// using simple loop
// the complexity of this is O(n)
// the problem with this problem is
// the larger n is, the longer this block of code takes.
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i < n; i++) {
    total += n;
  }
  return total;
}

// approach 2
// using math formula
// the pros of this is, it's not using a loop so this is probably very fast
// the cons of this is, it's not very intuitive
// the complexity of this is o(1)
// with this solution, it doesn't matter how big n is
// it will always do the same number of operations
function addUpToFormula(n) {
  return (n * (n + 1)) / 2;
}

// approach 3
// this one uses o(n*n) complexity
// which is not very good
function printALlPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(n);
    }
  }
}

// for this function
// we created two variables in total( total, i )
// there are only two, and it doesn't grow
// so this time complexity is o(1)
function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

// this one we created a new variable after each loop
// so this is o(n)
function double(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i] * 2);
  }
  return newArr
}
