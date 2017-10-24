### Directions:

You will be given two numbers, a and b, and your task is to determine if the first number a is divisible by all the prime factors of the second number b. For example: solve(15,12) = False because 15 is not divisible by all the prime factors of 12 (which include2).

### Examples:

```javascript
Test.assertEquals(solve(2,256),true);
Test.assertEquals(solve(2,253),false);
Test.assertEquals(solve(9,243),true);
Test.assertEquals(solve(15,12),false);
Test.assertEquals(solve(21,2893401),true);
Test.assertEquals(solve(21,2893406),false);
Test.assertEquals(solve(54,2834352),true);
Test.assertEquals(solve(54,2834359),false);
Test.assertEquals(solve(1000013,7187761),true);
Test.assertEquals(solve(1000013,7187762),false);
```