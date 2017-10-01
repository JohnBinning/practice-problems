const findLongest = (a) => {
  return a.reduce((acc, num) => {
    acc = num.toString().length > acc.toString().length ? num : acc;
    return acc;
  },0);
}

findLongest([1, 10, 100]) // => 100
findLongest([9000, 8, 800]) // => 9000
findLongest([8, 900, 500]); // => 900