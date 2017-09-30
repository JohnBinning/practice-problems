### Directions:

An array is called zero-balanced if its elements sum to 0 and for each positive element n, there exists another element that is the negative of n. Write a function named ìsZeroBalanced that returns true if its argument is zero-balanced array, else return false. Note that an empty array will not sum to zero.

#### Examples:

```javascript
isZeroBalanced([ 3, 2, 10, 4, 1, 6, 9 ]); // => false
isZeroBalanced([ 1, 2, 3, -1, -3, -2 ]); // => true
```