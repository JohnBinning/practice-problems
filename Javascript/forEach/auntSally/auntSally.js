const myAuntSally = (str) => {
	const answer = [];
  const alph = 'abcdefghijklmnopqrstuvwxyz';
  str.split(' ').forEach((word) => {
    for(let i = 1; i < word.length; i++) {
      if (word[i] === word[i - 1] && alph.includes(word[i].toLowerCase())) {
        if(word[i] !== word[i + 1]) {
          answer.push(word);
          break;
        }
        break;
      }
    }
  })
  return answer.join(' ');
}