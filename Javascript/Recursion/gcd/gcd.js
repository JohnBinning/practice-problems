const gcd = function(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

gcd(252, 105); // => 21