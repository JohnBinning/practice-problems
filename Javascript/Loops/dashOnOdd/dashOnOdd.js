const insertDash = (num) => {
  const answer = [];
  const splitNums = num.toString().split('');
  for ( let i = 0; i < splitNums.length; i++) {
    answer.push(splitNums[i]);
    if (splitNums[i] % 2 && splitNums[i + 1] % 2) {
      answer.push('-');
    }
  }
  return answer.join('');
}

Test.assertEquals(insertDash(454793),'4547-9-3');
Test.assertEquals(insertDash(123456),'123456');
Test.assertEquals(insertDash(1003567),'1003-567');