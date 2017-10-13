const fillWater = (buckets) => {
  let water = 0;
  const newBuckets = buckets.map( (bucket) => {
    if(!bucket.slice(0, 6).includes('robber')) return bucket;
    while(bucket.length < 30) {
      water += 5;
      bucket += 'water';
    }
    water -= (bucket.length - 30);
    bucket = bucket.slice(0, 30);
    return bucket;
  })
  water > 0 ? newBuckets.push(`${water} litres`) : newBuckets.push('0 litre');
  return newBuckets;
}