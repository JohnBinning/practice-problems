### Directions:

Given a list of white pawns on a chessboard (any number of them, meaning from 0 to 64 and with the possibility to be positioned everywhere), determine how many of them have their backs covered by another. Pawns attacking upwards since we have only white ones.

Please remember that a pawn attack(and defend as well) only the 2 square on the sides in front of him. https://en.wikipedia.org/wiki/Pawn_(chess)#/media/File:Pawn_(chess)_movements.gif

This is how the chess board coordinates are defined:

![Image](https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjljNib-cPXAhVLlVQKHe6nCycQjRwIBw&url=http%3A%2F%2Fwww.chess-poster.com%2Fenglish%2Flearn_chess%2Fpieces%2Fthe_pieces.htm&psig=AOvVaw1wgjxSfIS0FHlXWguNTNpO&ust=1510950985764921)

### Examples:

```javascript
Test.assertDeepEquals(coveredPawns([]),0);
Test.assertDeepEquals(coveredPawns(['f7', 'b1', 'h1', 'c7', 'h7']), 0);
Test.assertDeepEquals(coveredPawns([ 'e5', 'b2', 'b4', 'g4', 'a1', 'a5' ])), 2); // b2 covered by a1, a5 covered by b4
```