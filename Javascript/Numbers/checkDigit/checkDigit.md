### Directions:

you will be given a number, two indexes (index1 and index2) and a digit to look for. Your task will be to check if the digit exists in the number, within the indexes given.

Be careful, the index2 is not necessarily more than the index1.

checkDigit(12345678912345, 1, 0, 1) -> true, 1 exists in 12

checkDigit(12345678912345, 0, 1, 2) -> true, 2 exists in 12

checkDigit(67845123654000, 4, 2, 5) -> true, 4 exists in 845

checkDigit(66688445364856, 0, 0, 6) -> true, 6 exists in 6

### Examples:

```javascript
// const checkDigit = (num, index1, index2, digit) => {};

Test.assertEquals(checkDigit(1234567, 1, 0, 1), true);
Test.assertEquals(checkDigit(1234567, 0, 1, 2), true);
Test.assertEquals(checkDigit(67845123654, 4, 2, 4), true);
Test.assertEquals(checkDigit(6668844536485, 0, 0, 6), true);
Test.assertEquals(checkDigit(9999999999, 2, 5, 1), false);
```