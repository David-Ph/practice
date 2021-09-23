/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// * O(n^2) brute force nested array method
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    // first loop through the array
    for (let j = i + 1; j < nums.length; j++) {
      // loop through the next number, no need to check the number that has already been covered by i
      if (nums[i] + nums[j] === target) {
        // so if i + j equals target
        return [i, j]; // return i + j
      }
    }
  }
};

// * O(n)
const twoSum_new = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    // loop through each number in the array
    let getNumber = target - nums[i]; // subtract target by element currently looping to get the number you need
    if (nums.includes(getNumber) && nums.indexOf(getNumber) !== i) {
      // if the nums array contains the subtracted number AND check if the index is not the same
      return [i, nums.indexOf(getNumber)]; // return i and the index of subtracted number
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum_new([3, 2, 4], 6));
