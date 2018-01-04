const checkDigit = (num, index1, index2, digit) => {
  const str = num.toString();
  const highIndex = index1 >= index2 ? index1 : index2;
  const lowIndex = index1 >= index2 ? index2 : index1;
  for (let i = lowIndex; i <= highIndex; i++) {
    if(Number(str[i]) === digit) return true;
  }
  return false;
}