### Directions:

An array is called zero-plentiful if it contains at least one 0 and every sequence of 0s is of length at least 4. Your task is to return the number of zero sequences if the given array is zero-plentiful else 0.

### Examples:

```javascript
Test.assertDeepEquals(zeroPlentiful([3]),0);
Test.assertDeepEquals(zeroPlentiful([0,0,0,0]),1);
Test.assertDeepEquals(zeroPlentiful([0,0,0,1,0,0,0]),0);
Test.assertDeepEquals(zeroPlentiful([0,0,0,0,0,0]),1);
Test.assertDeepEquals(zeroPlentiful([0,2,0,0,0,0,0]),0);
Test.assertDeepEquals(zeroPlentiful([2,0,0,0,0,0,0,0,7,0,0,0,0,8]),2);
```