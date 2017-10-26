const dup = (str) => {
  const noDups = [str[0][0]];
  str.forEach( (word, i) => {
    word.split('').forEach( (char) => {
      if (noDups[noDups.length -1][noDups[i].length -1] !== char) noDups.push(char);
    })
    if(i < str.length - 1) noDups.push(' ');
  })
  return noDups.join('').split(' ');
}