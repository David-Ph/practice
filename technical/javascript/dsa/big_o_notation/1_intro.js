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
// with this solution, it doesn't matter how big n is
// it will always do the same number of operations
function addUpToFormula(n) {
  return (n * (n + 1)) / 2;
}
