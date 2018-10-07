function switchLetters(x) {
  return x.split('').map(y => {
    if(y === 'a') return 'b';
    if(y === 'b') return 'a';
    return y;
  }).join('');
}