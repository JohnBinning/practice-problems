function searchRange(nums: number[], target: number): number[] {
  let searching = true;
  const first = nums.indexOf(target);
  if (first === -1) return [-1, -1];
  let mostRecentIndex = first;
  while (searching) {
      const nextSearch = nums.slice(mostRecentIndex + 1, nums.length);
      const nextIndex = nextSearch.indexOf(target);
      if (nextIndex === -1) {
          searching = false;
      } else {
          mostRecentIndex = nextIndex + mostRecentIndex + 1;
      }
  }
  return [first, mostRecentIndex];
};

// faster - 

function searchRange2(nums: number[], target: number): number[] {
  let first = -1;
  let second: number | undefined;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
          if (first === -1) {
              first = i;
          } else {
              second = i;
          }
          
      }
  }
  if (first === -1) return [-1, -1];
  if (second) return [first, second];
  return [first, first];
};

/*

Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Follow up: Could you write an algorithm with O(log n) runtime complexity?

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109

*/