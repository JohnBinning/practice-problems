const Word2Num = (str) => {
  const numList = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
  const num = {};
  num.value = numList.indexOf(str) + 1;
  num.valueOf = function() {
    return this.value;
  }
  num.toString = function() {
    return numList[this.value - 1];
  }
  return num;
}
