### Directions:

Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Along with opening (() and closing ()) parenthesis, input can contain any valid ASCII characters.

### Examples:

```javascript
Test.assertEquals(validParentheses( "()" ), true);
Test.assertEquals(validParentheses( "(()())()" ), true);
Test.assertEquals(validParentheses( ")()(" ), false);
Test.assertEquals(validParentheses( "(()))(" ), false);
Test.assertEquals(validParentheses( "())" ), false);
```