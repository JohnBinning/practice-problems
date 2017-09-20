const duplicateEncode = (text) => {
    const dups = text.toLowerCase().split('').reduce((acc, num) => {
        acc[num] ? acc[num] += 1 : acc[num] = 1;
        return acc;
    },{});
    const numKeys = Object.keys(dups);
    const singleDupes = numKeys.filter( num => dups[num] === 1 );
    return text.toLowerCase().split('').map( (letter) => {
      return singleDupes.includes(letter) ? '(' : ')';
    }).join('');
}

duplicateEncode("din"); // => '((('
duplicateEncode("recede"); // => '()()()'