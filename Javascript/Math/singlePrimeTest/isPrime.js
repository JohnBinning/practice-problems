const isPrime = (num) => {
  if (num < 2) return false;
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


// alternatively 

const isPrime = (num) => {
	let currentComp = 2;
	while (currentComp < num) {
		if (num % currentComp === 0) {
				return currentComp === num;
		} else {
				currentComp += 1;
		}
	}
	return true;
}

// added efficiency

const isPrime = (num) => {
	let currentComp = 2;
	while (currentComp < Math.floor(Math.sqrt(num))) {
		if (num % currentComp === 0) {
				return false;
		} else {
				currentComp += 1;
		}
	}
	return true;
}
