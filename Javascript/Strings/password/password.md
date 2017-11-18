### Directions:

I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

Passwords must abide by the following requirements:

More than 3 characters but less than 20.

Must contain only alphanumeric characters.

Must contain letters and numbers.

### Examples:

```javascript
Test.assertEquals( validPass('Username123') , 'VALID' );
Test.assertEquals( validPass('Username') , 'INVALID' );
Test.assertEquals( validPass('123') , 'INVALID' );
Test.assertEquals( validPass('Username123!') , 'INVALID' );
Test.assertEquals( validPass('ThisPasswordIsTooLong1234') , 'INVALID' )
```