function firstMissingPositive(nums: number[]): number {
  let lowest = 0;
  let highest = 0;
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
          numMap[nums[i]] = true;
          if (nums[i] > highest) {
              highest = nums[i];
          }
      }
  }
  let count = 1;
  while (count <= nums.length && lowest === 0) {
      if (!numMap[count]) {
          lowest = count;
      }
      count += 1;
  }
  return lowest ? lowest : highest + 1;
};

/*

Given an unsorted integer array nums, find the smallest missing positive integer.

 

Example 1:

Input: nums = [1,2,0]
Output: 3
Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Example 3:

Input: nums = [7,8,9,11,12]
Output: 1
 

Constraints:

0 <= nums.length <= 300
-231 <= nums[i] <= 231 - 1

*/