// Write a function that will return the count of distinct case-insensitive alphabetic characters 
// and numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain only alphabets 
// (both uppercase and lowercase) and numeric digits.


const duplicateCount = (text) => {
  let dups = text.toLowerCase().split('').reduce((acc, num) => {
        acc[num] ? acc[num] += 1 : acc[num] = 1;
        return acc;
    },{});

    const numKeys = Object.keys(dups);
    const singleDupes = numKeys.filter( num => dups[num] > 1 );
    return singleDupes.length;
}