### Directions:

Write a function that given a number, returns the prime factors of that number.  

Expect that the number will be an integer less than 1,000,000,000.

The function should throw an error if an unacceptable number is entered.

There should not be duplicate return values getPrimeFactors(49) should not return [ 7, 7 ] it should return [ 7 ]


### Examples:

```javascript
getPrimeFactors(15); // => [ 3, 5 ]
getPrimeFactors(102); // => [ 2, 3, 17 ]
getPrimeFactors(49); // => [ 7 ]
getPrimeFactors(5); // => [ 5 ]
getPrimeFactors(2); // => [ 2 ]
getPrimeFactors(100009); // => [ 7, 13, 157 ]
```

