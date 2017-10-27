const validParentheses = (parens) => {
  let currentOpen = 0;
  for (let i = 0; i < parens.length; i++) {
    if(parens[i] === '(') currentOpen += 1;
    if(parens[i] === ')') currentOpen -= 1;
    if(currentOpen < 0) return false;
  }
  return currentOpen === 0;
}