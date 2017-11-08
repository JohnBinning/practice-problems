const digitalRoot = (n) => {
  while(n > 10) {
    n = n.toString().split('').reduce((acc, num) => {
      acc += Number(num);
      return acc;
    },0)
  }
  return n;
}