let isLockNessMonster = (str) => {
  const found = str.match( /tree fiddy/i ) || str.match( /3.50/i );
  return found ? true : false;
}

// or

isLockNessMonster = (str) => /tree fiddy|three fifty|3.50/.test(str);