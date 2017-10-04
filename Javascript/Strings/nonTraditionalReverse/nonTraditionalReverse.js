const reverString = (str) => {
  const answer = [];
  for (let i = str.length; i > 0; i--) {
    answer.push(str[i - 1]);
  }
  return answer.join('');
}

reverString('hello there'); // => 'ereht olleh'