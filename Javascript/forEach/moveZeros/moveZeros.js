const moveZeros = (arr) => {
  const nonZeros = [];
  const zeros = [];
  arr.forEach((el) => {
    if (el === 0) {
      zeros.push(el);
    } else {
      nonZeros.push(el);
    }
  })
  return [...nonZeros, ...zeros];
}


/*

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/