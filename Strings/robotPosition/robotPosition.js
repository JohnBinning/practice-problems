//write a function to determine if a robot has returned to it's original position
//The move sequence is represented by a string. And each move is represent by a character. 
//The valid robot moves are R (Right), L (Left), U (Up) and D (down). 
//The output should be true or false representing whether the robot makes a circle.

//Example 1:
//  Input: "UD"
//  Output: true

//Example 2:
//  Input: "LL"
//  Output: false

const judge = (moves) => {
  let x = 0;
  let y = 0;
  moves.split('').forEach((move) => {
    switch(move) {
      case 'U':
        y += 1;
        break;
      case 'D':
        y -= 1;
        break;
      case 'R':
        x += 1;
        break;
      case 'L':
        x -= 1;
        break;
    };
  });
  if (!x && !y) {
    return true;
  } else {
    return false;
  }
};