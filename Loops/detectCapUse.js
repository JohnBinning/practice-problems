// Given a word, you need to judge whether the usage of capitals in it is right or not.

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "eagle".
// Only the first letter in this word is capital if it has more than one letter, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.

const detectCapitalUse = (word) => {
    if (word.length === 1) {
        return true;
    }

    const isCap = (letter) => {
      return letter.toUpperCase() === letter ? true : false;
    }

    const firstLetter = isCap(word[0]);
    const secondLetter = isCap(word[1]);
    
    if(firstLetter && secondLetter) {
        for(let i = 1; i < word.length; i++) {
            if (word.length === 2) {
                return true;
            } else if (word[i] !== word[i].toUpperCase()) {
                return false;
            }
        }
        return true;
    } else if(firstLetter && !secondLetter) {
        for(let i = 2; i < word.length; i++) {
            if (word.length === 2) {
                return true;
            } else if (word[i] === word[i].toUpperCase()) {
                return false;
            }
        }
        return true;
    } else if(!firstLetter) {
        for(let i = 1; i < word.length; i++) {
            if (word[i] === word[i].toUpperCase()) {
                return false;
            }
        }
        return true;
    }
};

detectCapitalUse('eagLe'); // => false
detectCapitalUse('USaF'); // => false
detectCapitalUse('uSAF'); // => false
detectCapitalUse('USA'); // => true
detectCapitalUse('Us'); // => true
detectCapitalUse('US'); // => true
detectCapitalUse('Eagle'); // => true
detectCapitalUse('eagle'); // => true

