const threeAndFive = (n) => {
  let counter = 0;
  for (let i = 3; i < n; i++) {
    if(i % 3 == 0 || i % 5 == 0){
      counter += i;
    }
  }
  return counter;
}

threeAndFive(10); // => 23