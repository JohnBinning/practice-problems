const getPrimeFactors = (num) => {
  if (!num) throw "Please enter an integer greater than 0";
	const factors=[];
	let currentFactor = 2;

	while (num !== 1) {
		if (num % currentFactor === 0) {
      if(!factors.includes(currentFactor)) factors.push(currentFactor);
			num /= currentFactor;
			currentFactor = 2;
		} else {
			currentFactor += 1;
		}
	}
	return factors;
};

getPrimeFactors(102); // => [ 2, 3, 17 ]
