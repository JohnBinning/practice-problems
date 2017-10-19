const zeroPlentiful = (arr) => {
  const tooSmall = [1,2,3];
  const count = arr.reduce((acc, num) => {
    if(num && tooSmall.includes(acc.zeroStreak.length)) {
      acc.smallStreak = true;
    }
    !num ? acc.zeroStreak.push(0) : acc.zeroStreak = [];
    if (acc.zeroStreak.length === 4) {
      acc.zeroCount += 1;
    }
    return acc;
  },{ zeroStreak: [], zeroCount: 0, smallStreak: false })
  const { zeroStreak, zeroCount, smallStreak } = count;
  if((tooSmall.includes(zeroStreak.length)) || smallStreak) return 0;
  return zeroCount;
}
