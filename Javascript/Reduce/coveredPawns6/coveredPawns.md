### Directions:

Given a list of white pawns on a chessboard (any number of them, meaning from 0 to 64 and with the possibility to be positioned everywhere), determine how many of them have their backs covered by another. Pawns attacking upwards since we have only white ones.

Please remember that a pawn attack(and defend as well) only the 2 square on the sides in front of him. https://en.wikipedia.org/wiki/Pawn_(chess)#/media/File:Pawn_(chess)_movements.gif

This is how the chess board coordinates are defined:

![Image](http://4.bp.blogspot.com/-q1V7fUj_dPg/UCSi5RJWkrI/AAAAAAAAAFw/9maalysCBnE/s1600/ChessBoard2.jpg)

### Examples:

```javascript
Test.assertDeepEquals(coveredPawns([]),0);
Test.assertDeepEquals(coveredPawns(['f7', 'b1', 'h1', 'c7', 'h7']), 0);
Test.assertDeepEquals(coveredPawns([ 'e5', 'b2', 'b4', 'g4', 'a1', 'a5' ])), 2); // b2 covered by a1, a5 covered by b4
```