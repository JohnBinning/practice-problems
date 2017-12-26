const missingValues = (arr) => {
  const vals = arr.reduce((acc, next) => {
    acc[next] ? acc[next] += 1 : acc[next] = 1;
    return acc;
  },{})
  const one = Object.keys(vals).find(val => vals[val] === 1);
  const two = Object.keys(vals).find(val => vals[val] === 2);
  return one * one * two;
}