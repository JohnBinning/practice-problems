### Directions:

Create a function called noRepeat() that takes a string argument and returns a single letter string of the first not repeated character in the entire string.

### Examples:

```ruby
Test.assert_equals(no_repeat("aabbccdde"),"e")
Test.assert_equals(no_repeat("wxyz"),"w")
Test.assert_equals(no_repeat("testing"), "e")
Test.assert_equals(no_repeat("codewars"), "c")
Test.assert_equals(no_repeat("Testing"), "T")
```