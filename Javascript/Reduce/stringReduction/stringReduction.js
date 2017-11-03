const stringReduction = (a, b) => {
  const bCount = b.split('').reduce((acc, next) => {
    acc[next] ? acc[next] += 1 : acc[next] = 1;
    return acc;
  },{})
    const aCount = a.split('').reduce((acc, next) => {
    acc[next] ? acc[next] += 1 : acc[next] = 1;
    return acc;
  },{})
  
  const answer = b.split('').find((char) =>  bCount[char] > aCount[char]);
  return answer ? 0 : a.length - b.length;
};