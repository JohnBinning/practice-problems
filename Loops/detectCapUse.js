

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

detectCapitalUse('ffffffffffffffffffffF'); // => false
detectCapitalUse('USaF'); // => false
detectCapitalUse('uSAF'); // => false
detectCapitalUse('USA'); // => true
detectCapitalUse('Us'); // => true
detectCapitalUse('US'); // => true

