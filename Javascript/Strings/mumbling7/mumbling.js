let accum = (s) => {
	return s.split('').reduce((acc, char, i) => {
    let str = char.toUpperCase();
    for (let j = 0; j < i; j++) {
      str += char.toLowerCase();
    }
    return i ? acc += ('-' + str) : acc += str;
  },'');
}

// with repeat

accum = (s) => {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}