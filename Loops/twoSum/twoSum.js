// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

const twoSum = function(nums, target) {
    const targetIndices = [];
    for (let i = 0; i < nums.length; i++) {
        let found = false;
        if (found) {
          break;
        }
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                targetIndices.push(i);
                targetIndices.push(j);
                found = true;
                break;
            }
        }
    }
    return targetIndices;
};

const nums = [2, 7, 11, 15];
const target = 17;

twoSum(nums, target);

// => [0, 3]