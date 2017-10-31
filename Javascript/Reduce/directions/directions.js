const dirReduc = (arr) => {
  const relations = {
    'NORTH': 'SOUTH',
    'SOUTH': 'NORTH',
    'WEST': 'EAST',
    'EAST': 'WEST'
  };

  return arr.reduce((acc, dir) => {
    if (acc[acc.length - 1] === relations[dir]) {
      acc.pop();
    } else {
      acc.push(dir);
    }
    return acc;
  },[]);
}