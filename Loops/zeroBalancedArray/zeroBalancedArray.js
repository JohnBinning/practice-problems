const isZeroBalanced = (n) => {
  let sum = 0;
  let allDupes = true;
  for ( let i = 0; i < n.length; i++) {
    sum += n[i];
    if (!(n.includes(n[i] * -1))) {
      allDupes = false;
      break;
    }
  }
  return (!sum && allDupes && n.length) ? true: false;
}

isZeroBalanced([ 3, 2, 10, 4, 1, 6, 9 ]); // => false
isZeroBalanced([ 1, 2, 3, -1, -3, -2 ]); // => true