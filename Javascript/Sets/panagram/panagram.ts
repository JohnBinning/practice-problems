export const isPangram = (phrase: string): boolean => {
    const resultSet = new Set();
    for (let i = 0; i < phrase.length; i++) {
      if (!Number(phrase[i])) {
        resultSet.add(phrase[i].toLowerCase())
      }
      if (Array.from(resultSet).length === 26) return true;
    }
    return false;
  }

/*
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/
