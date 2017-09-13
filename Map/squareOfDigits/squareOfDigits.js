// Given an integer, return a new number that is the square of every digit 

// e.g. given 24 -> 416
//       given 152 -> 1254

const squareDigits = num => {
  let numArr = num.toString().split('');
  let sqNumArr = numArr.map(num => {
    return (num * num);
  });
  return parseInt(sqNumArr.join(''));
}

// or

const squareDigits = num => parseInt(num.toString().split('').map(digit => digit * digit).join(''));

squareDigits(1234) // => 14916