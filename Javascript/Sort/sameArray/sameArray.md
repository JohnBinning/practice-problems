### Directions:

Given two arrays a and b write a function comp(a, b) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.


### Examples:

```javascript
let a = [ 121, 144, 19, 161, 19, 144, 19, 11 ];
let b = [ 231, 14641, 20736, 361, 25921, 361, 20736, 361 ];
comp(a, b); // => false
a = [ 121, 144, 19, 161, 19, 144, 19, 11 ];
b = [ 121, 14641, 20736, 361, 25921, 361, 20736, 361 ];
comp(a, b); // => true
```