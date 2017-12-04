const onlyDuplicates = (str) => {
  const key = str.split('').reduce((acc, char) => {
    acc[char] ? acc[char] += 1 : acc[char] = 1;
    return acc;
  },{})
  return str.split('').filter((char) => key[char] > 1).join('');
}