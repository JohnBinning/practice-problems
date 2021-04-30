/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
      if (numMap[nums[i]] === 2) {
          delete numMap[nums[i]];
      } else if (numMap[nums[i]] === 1) {
          numMap[nums[i]] += 1;
      } else {
          numMap[nums[i]] = 1;
      }
  }
  return Object.keys(numMap)[0];
};

/*

Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

 

Example 1:

Input: nums = [2,2,3,2]
Output: 3
Example 2:

Input: nums = [0,1,0,1,0,1,99]
Output: 99
 

Constraints:

1 <= nums.length <= 3 * 104
-231 <= nums[i] <= 231 - 1
Each element in nums appears exactly three times except for one element which appears once.

*/
