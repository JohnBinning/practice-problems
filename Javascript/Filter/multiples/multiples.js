//given an array of numbers return all multiples of an int

const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const multiples = (int, nums) => {
  return nums.filter( num => num % int === 0);
};

multiples(3, nums);

// => [ 3, 6, 9, 12, 15, 18 ]
