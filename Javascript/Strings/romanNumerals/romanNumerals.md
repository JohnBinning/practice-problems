### Directions:

Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

### Examples:

```javascript
it("XXI should be 21", () => {
  Test.assertEquals(solution("XXI"), 21);
});
it("MCMXC should be 1990", () => {
  Test.assertEquals(solution("MCMXC"), 1990);
});
it("MCMXC should be 1997", () => {
  Test.assertEquals(solution("MCMXCVII"), 1997);
});
it("MDCLXVI should be 1666 ", () => {
  Test.assertEquals(solution("MDCLXVI"), 1666);
});
```