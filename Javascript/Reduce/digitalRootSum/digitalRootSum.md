### Directions:

A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

```javascript
digitalRoot(942);
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6
```


### Examples:

```javascript
Test.assertEquals( digitalRoot(16), 7 );
Test.assertEquals( digitalRoot(942), 6 );
```