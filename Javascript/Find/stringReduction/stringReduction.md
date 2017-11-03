### Directions:

Consider two strings "aabcdefg" and "fbd". How many characters do we have to remove from the first string to get the second string? Although not the only way to solve this, we could create an Object of counts for each string and see which character counts are different. That should get us close to the answer.

For this example, solve("aabcdefg","fbd") = 5. 
Also, solve("xyz","yxxz") = 0, because we cannot get second string from the first.

### Examples:

```javascript
Test.assertEquals(stringReduction("xyz","yxz"),0);
Test.assertEquals(stringReduction("abcxyz","ayxz"),2);
Test.assertEquals(stringReduction("abcdexyz","yxz"),5);
Test.assertEquals(stringReduction("axyyz","yxxz"),0);
Test.assertEquals(stringReduction("abdegfg","ffdb"),0);
Test.assertEquals(stringReduction("aabcdefg","fbd"),5);
Test.assertEquals(stringReduction("aabcdefg","fdb"),5);
```