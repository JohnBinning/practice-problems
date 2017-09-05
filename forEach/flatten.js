//write a function that flattens nested arrays

// flatten([[1,2,[3]],4]);

// => [1, 2, 3, 4]

const flatten = (notFlat) => {
  const flattened = [];

  const flattener = (toBeFlattened) => {
    toBeFlattened.forEach( val => {
      if(!Array.isArray(val)) {
        flattened.push(val);
      } else {
        flattener(val);
      }
    })
  }
  flattener(notFlat);
  return flattened;
};

flatten([[1,2,[3]],4]);

// => [1, 2, 3, 4]