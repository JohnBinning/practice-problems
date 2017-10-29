const iqTest = (numbers) => {
  const numbersArr = numbers.split(' ');
  const evens = numbersArr.filter( num => !(num % 2));
  const odds = numbersArr.filter( num => num % 2);
  const different = evens.length < odds.length ? evens[0] : odds[0];
  return numbersArr.indexOf(different);
}