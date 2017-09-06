//Given an array of integers, every element appears twice except for one. Find that single one.

const singleNumber = (nums) => {
  let dups = nums.reduce((acc, num) => {
    acc[num] ? acc[num] += 1 : acc[num] = 1;
    return acc;
  },{});

  const numKeys = Object.keys(dups).map( numb => parseInt(numb) );
  const singleNum = numKeys.find( num => dups[num] === 1 );
  return singleNum;
};

singleNumber([1,1,2,3,3,4,4]);

// => 2