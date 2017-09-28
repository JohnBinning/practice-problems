const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const calculate = (w) => {
  return w.split('').reduce( (acc, letter) => {
    acc += (alphabet.indexOf(letter) + 1)
    return acc;
  },0)
}

const consonantValue = (s) => {
  const vowels = ['a','e','i','o','u'];
  const noVowels = [];
  let sub = [];
  
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i]) && sub.length) {
      noVowels.push(sub.join(''));
      sub = [];
    } else if (!vowels.includes(s[i])) {
      sub.push(s[i]);
    }
  }
  
  if (sub.length) {
    noVowels.push(sub.join(''));
  }
  
  const answer = noVowels.reduce((acc, str) => {
    const nextTry = calculate(str);
    nextTry > acc.high ? acc.high = nextTry : null;
    return acc;
  },{ high: 0 })
  return answer.high;
};

consonantValue("zodiacszzb"); // => 76
consonantValue("zodiacs"); // => 26