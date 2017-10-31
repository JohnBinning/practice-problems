const comp = (arr1, arr2) => {
  if(!arr1 || !arr2) return false;
  const firstSort = arr1.sort( (a, b) => a - b);
  const secondSort = arr2.sort( (a, b) => a - b);
  return firstSort.filter((num, i) => num * num !== secondSort[i]).length === 0;
}