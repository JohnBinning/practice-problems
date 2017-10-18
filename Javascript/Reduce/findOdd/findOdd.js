const findOdd = (nums) => {
  const collected = nums.reduce((acc, num) => {
    acc[num] ? acc[num] += 1 : acc[num] = 1;
    return acc;
  },{});
  const odd = Object.keys(collected).find( (num) => collected[num] % 2);
  return parseInt(odd);
}