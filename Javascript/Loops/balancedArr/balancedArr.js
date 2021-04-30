function balancedSum(arr) {
  const countAtIndexMap = {};
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
      countAtIndexMap[i] = total * 1;
      total += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    if (total - countAtIndexMap[i] === countAtIndexMap[i] + arr[i]) {
      return i;
    }
  }

}

/*

return the index where the left and right side of an array are balanced

[1,2,3,4,6] => 3 // 1 + 2 + 3 === 6

*/