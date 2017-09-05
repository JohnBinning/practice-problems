// Given a sorted array consisting of only integers where every element appears twice 
// except for one element which appears once. Find this single element that appears only once.

// Example 1:
// Input: [1, 1, 2, 3, 3, 4, 4, 8, 8]
// Output: 2
// Example 2:
// Input: [3, 3, 7, 7, 10, 11, 11]
// Output: 10

const singleNonDuplicate = (nums) => {
  if(nums[0] !== nums[1]) {
    return nums[0];
  }
  
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
};

singleNonDuplicate([1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]);  // => 4
singleNonDuplicate([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]);  // => 1
singleNonDuplicate([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6]);  // => 6