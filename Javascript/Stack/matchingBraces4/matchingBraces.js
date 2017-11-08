const validBraces = (braces) => {
  const leftChars = '([{', rightChars = ')]}';
  const match = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  if(braces.length % 2) return false;
  let leftArr = [];
  braces.split('').forEach((char) => {
    if(leftChars.includes(char)) {
      leftArr.unshift(char)
    } else if(match[char] === leftArr[0]) {
      leftArr.shift();
    } 
  })
  return leftArr.length === 0;
}
