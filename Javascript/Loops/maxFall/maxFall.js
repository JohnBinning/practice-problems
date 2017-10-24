const maxFall = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const dif = (arr[i] - arr[j]);
      if(dif > max) max = dif;
    }
  }
  const roundedMax = !(max.toFixed(4) % 1) ? max : max.toFixed(4);
  return Number(roundedMax);
}
