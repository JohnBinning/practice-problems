### Directions:

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

### Examples:

```javascript
// returns "theStealthWarrior"
toCamelCase("the-stealth-warrior"); 

// returns "TheStealthWarrior"
toCamelCase("The_Stealth_Warrior");

Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned");
Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value");
Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value");
Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value");
```