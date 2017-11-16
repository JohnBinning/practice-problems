let pigIt = (str) => {
  const answer = str.split(' ').map((word) => {
    return word.slice(1, word.length) + word[0] + 'ay';
    })
  return answer.join(' ');
}


// regex

pigIt = (str) => {
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3");
}