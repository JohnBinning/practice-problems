### Directions:

If the text or the character are empty, return an empty string.
There never will be a case when both are empty as nothing is going on!!

The character is a string. It will always be of length 1 if it's not empty.

before = "abc"
character = "z"
after = "zzz"

### Examples:

```javascript
Test.assertEquals(contamination("abc","z"), "zzz")
Test.assertEquals(contamination("","z"), "")
Test.assertEquals(contamination("abc",""), "")
Test.assertEquals(contamination("_3ebzgh4","&"), "&&&&&&&&")
Test.assertEquals(contamination("//case"," "), "      ")
```