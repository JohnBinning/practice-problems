const getConsectiveItems = (items, key) => {
  const answer = items.toString().split('').reduce((acc, item) => {
    if (item === key.toString()) {
      acc.current += 1;
      if (acc.current > acc.total) {
        acc.total += 1;
      }
    } else {
      acc.current = 0;
    }
    return acc;
  },{ current: 0, total: 0});
  return answer.total;
}

getConsectiveItems(90000, 0); // => 4