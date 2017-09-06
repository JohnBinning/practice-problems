// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.

// The input array will only contain 0 and 1.

const findMaxConsecutiveOnes = (nums) => {
  let max = 0;
  let currentMax = 0;
  
  const isOne = () => {
    currentMax += 1;
      if (currentMax > max) {
        max = currentMax;
      }
  }
  
  nums.forEach(num => {
    if(num) {
      isOne();
    } else {
      currentMax = 0;
    }
  })
  return max;
};