const songDecoder = (song) => {
  let orig = song.split('WUB').filter( (word) => word !== '');
  for (let i = 0; i < orig.length - 1; i++) {
    orig[i] += ' ';
  }
  return orig.join('');
}