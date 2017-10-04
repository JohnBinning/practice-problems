const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const calculate = (w) => {
  return w.split('').reduce( (acc, letter) => {
    acc += (alphabet.indexOf(letter) + 1)
    return acc;
  },0)
}

const calcHigh = (x) => {
  return x.split(' ').reduce( (acc, word) => {
    let score = calculate(word);
    if (acc.score < score) {
      acc = { word, score }
    }
    return acc;
  }, { score: 0}).word;
}

calcHigh('man i need a taxi');  // => 'taxi'
calcHigh('man i need a taxi to zeroz');  // => 'zeroz'