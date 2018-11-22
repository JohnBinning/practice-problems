### Directions:

Write a function

```javascript
tripledouble(num1,num2);
```
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

### Examples:

```javascript
  tripledouble(451999277, 41177722899) === 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

  Test.assertEquals(tripledouble(451999277,41177722899),1);
  Test.assertEquals(tripledouble(1222345, 12345),0);
  Test.assertEquals(tripledouble(12345, 12345),0);
  Test.assertEquals(tripledouble(666789, 12345667),1);
  Test.assertEquals(tripledouble(10560002, 100),1);
  Test.assertEquals(tripledouble(1112, 122),0);
```