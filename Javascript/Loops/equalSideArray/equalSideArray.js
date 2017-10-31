const findEvenIndex = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let left = 0, right = 0;
    for (let j = i - 1; j >= 0; j--) {
      left += arr[j];
    }
    for (let j = i + 1; j < arr.length; j++) {
      right += arr[j];
    }
    if(left === right) return i;
  }
  return -1;
}