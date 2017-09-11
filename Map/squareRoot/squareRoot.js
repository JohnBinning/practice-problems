//given an array of numbers, return the square of each.

const square = (nums) => {
  return nums.map((num) => {
    return num * num;
  });
};

square([1,2,3,4,5]); // => [1, 4, 9, 16, 25]