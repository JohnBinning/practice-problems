### Directions:

Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "eagle".
Only the first letter in this word is capital if it has more than one letter, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.

#### Examples:

```javascript
detectCapitalUse('eagLe'); // => false
detectCapitalUse('USaF'); // => false
detectCapitalUse('uSAF'); // => false
detectCapitalUse('USA'); // => true
detectCapitalUse('Us'); // => true
detectCapitalUse('US'); // => true
detectCapitalUse('Eagle'); // => true
detectCapitalUse('eagle'); // => true
detectCapitalUse('e'); // => true
detectCapitalUse('E'); // => true
```