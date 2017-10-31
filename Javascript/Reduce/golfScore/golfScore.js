const golfScoreCalculator = (parList, scoreList) => {
  return parList.split('').reduce((acc, nextPar, i) => {
    acc += (scoreList[i] - nextPar);
    return acc;
  },0);
}