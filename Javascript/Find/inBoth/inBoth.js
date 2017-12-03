const inArray = (first, second) => {
  return first.filter((word) => {
    return second.find((fig) => fig.includes(word));
  }).sort();
}