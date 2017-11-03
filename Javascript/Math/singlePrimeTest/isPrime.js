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