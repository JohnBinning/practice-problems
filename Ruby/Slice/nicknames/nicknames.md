### Directions:

Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

If the 3rd letter is a consonant, return the first 3 letters.

If the string is less than 4 characters, return "Error: Name too short".

### Examples:

```ruby
Test.assert_equals(nickname_generator("Jimmy"), "Jim")
Test.assert_equals(nickname_generator("Samantha"), "Sam")
Test.assert_equals(nickname_generator("Sam"), "Error: Name too short")
Test.assert_equals(nickname_generator("Kayne"), "Kay", "'y' is not a vowel")
Test.assert_equals(nickname_generator("Melissa"), "Mel")
Test.assert_equals(nickname_generator("James"), "Jam")
```