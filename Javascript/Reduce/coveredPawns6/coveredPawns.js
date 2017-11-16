const coveredPawns = (pawns) => {
  const alphabet = ' abcdefgh ';
  return pawns.reduce( (acc, pawn) => {
    const letter = pawn[0], num = pawn[1] - 1;
    const i = alphabet.indexOf(letter);
    const before = pawns.includes(`${alphabet[i - 1]}${num}`);
    const after = pawns.includes(`${alphabet[i + 1]}${num}`);
    return (before || after) ? acc += 1 : acc;
  }, 0);
}