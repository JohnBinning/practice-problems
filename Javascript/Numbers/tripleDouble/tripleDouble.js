function tripledouble(num1, num2) {
  const triples = new Set(), num1String = num1.toString(), num2String = num2.toString();
  if (num1String.length < 3 || num2String.length < 2) return 0;
  for (let i = 2; i < num1String.length; i++) {
    const current = num1String[i];
    if (current === num1String[i - 1] && current === num1String[i - 2]) {
      triples.add(current);
    }
  }
  for (let i = 1; i < num2String.length; i++) {
    if (triples.has(num2String[i]) && num2String[i] === num2String[i - 1]) {
      return 1;
    }
  }
  return 0;
}