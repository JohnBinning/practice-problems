const checkVowel = (str, pos) => {
  const vowels = 'aeiouAEIOU';
  return vowels.includes(str[pos]);
};