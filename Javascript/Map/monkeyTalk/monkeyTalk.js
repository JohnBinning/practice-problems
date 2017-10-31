const monkeyTalk = (phrase) => {
  const vowels = 'aeiouAEIOU';
  const answer = phrase.split(' ').map( (word, i) => {
    if (!i ) return vowels.includes(word[0]) ? 'Eek' : 'Ook';
    return vowels.includes(word[0]) ? 'eek' : 'ook';
  });
  answer[answer.length - 1] += '.';
  return answer.join(' ');
}