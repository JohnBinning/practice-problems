const twinPrime = (n) => {
  const isPrime = (num) => {
    if(num < 2) return false;
    const factors=[];
	  let currentFactor = 2;

	  while (num !== 1) {
		  if (num % currentFactor === 0) {
        factors.push(currentFactor);
			  num /= currentFactor;
			  currentFactor = 2;
		  } else {
			  currentFactor += 1;
		  }
	  }
	  return factors.length === 1;
  }
  
  let twinPrimes = 0;
  for(let i = 0; i < n; i++) {
    if(isPrime(i) && isPrime(i + 2)) twinPrimes += 1;
  }
  return twinPrimes;
}
