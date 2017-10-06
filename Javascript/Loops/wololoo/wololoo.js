const key = {
  w: 4,
  p: 3,
  b: 2,
  s: 1,
  m: -4,
  q: -3,
  d: -2,
  z: -1
}

const alphabetWar = (fight) => {
  let count = 0;
  for (let i = 0; i < fight.length; i++) {
    const statuses = {
      j: false,
      t: false,
      left: false,
      right: false
    }
    
    if(key[fight[i]] && key[fight[i]] > 0) {
      statuses.left = true;
    } else if (key[fight[i]] && key[fight[i]] < 0) {
      statuses.right = true;
    }
    
    if(fight[i - 1] === 'j' || fight[i + 1] === 'j') {
      statuses.j = true;
    }
    if(fight[i - 1] === 't' || fight[i + 1] === 't') {
      statuses.t = true;
    }
    
    if(statuses.left) {
      
      if(statuses.j && !statuses.t) {
        count += (key[fight[i]] * -1)
      } else {
        count += key[fight[i]];
      }
      
    } else if (statuses.right) {
      
      if(statuses.t && !statuses.j) {
        count += (key[fight[i]] * -1)
      } else {
        count += key[fight[i]];
      }
      
    }
  }

  let answer = count > 0 ? "Left side wins!" : "Right side wins!";
  return count === 0 ? "Let's fight again!" : answer;
}

alphabetWar('ttdjjtd'); // => "Let's fight again!"