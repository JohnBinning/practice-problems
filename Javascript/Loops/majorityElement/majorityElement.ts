function majorityElement(nums: number[]): number {
  const countMap = {};
  for (let i = 0; i < nums.length; i++) {
      if (countMap[nums[i]]) {
          countMap[nums[i]] += 1;
      } else {
          countMap[nums[i]] = 1;
      }
      if (countMap[nums[i]] > (nums.length / 2)) {
          return nums[i];
      }
  }
};

/*

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/
