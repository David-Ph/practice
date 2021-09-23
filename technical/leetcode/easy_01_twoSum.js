/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// * O(n^2) brute force method
var twoSum = function (nums, target) {
  let index1, index2;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        index1 = i;
        index2 = j;
      }
    }
  }
  return [index1, index2];
};

// * O(n)
const twoSum_new = function (nums, target) {
  let index1, index2;
  for (let i = 0; i < nums.length; i++) {
    let getNumber = target - nums[i];
    if (nums.includes(getNumber) && nums.indexOf(getNumber) !== i) {
      index1 = i;
      index2 = nums.indexOf(getNumber);
      break;
    }
  }

  // if (!index1 || !index2) return "Not found";
  return [index1, index2];
};

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum_new([3, 2, 4], 6));
/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity? */
