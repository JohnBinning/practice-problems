let order = (words) => {
  return words.split(' ').sort((a, b) => {
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}   

// refactored from 

order = (words) => {
  const nums = '123456789';
  const spl = words.split(' ').map( (word) => {
    const num = word.split('').find( (char) => nums.includes(char));
    return { word, num };
  })
  return spl.sort( (a, b) => a.num - b.num).map( (word) => word.word).join(' ');
}



order('is2 Thi1s T4est 3a'); // => 'Thi1s is2 3a T4est'