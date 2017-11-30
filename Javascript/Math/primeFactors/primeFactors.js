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


const colorProbability = (color, texture) => {
  const bag = [
    { color: 'red', texture: 'smooth', quantity: 1 },
    { color: 'red', texture: 'bumpy', quantity: 4 },
    { color: 'yellow', texture: 'bumpy', quantity: 2 },
    { color: 'yellow', texture: 'smooth', quantity: 1 },
    { color: 'green', texture: 'bumpy', quantity: 1 },
    { color: 'green', texture: 'smooth', quantity: 1 }
  ];
  const totalBumpy = 6, totalSmooth = 4;
  return bag.filter((obj) => {
    return obj.texture === 'bumpy';
  })
}