const romanNumerals = (roman) => {
  const key = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  }
  let answer = 0;
  for (let i = 0; i < roman.length; i++) {
    if(key[roman[i]] > key[roman[i - 1]]) answer -= (key[roman[i - 1]] * 2);
    answer += key[roman[i]];
  }
  return answer;
}