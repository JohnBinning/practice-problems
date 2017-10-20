const persistence = (num) => {
  let reps = 0;
  const multiply = (numb) => {
    reps +=1;
    const newNumb = numb.split('').reduce((acc, next) => acc * next,1);
    return newNumb.toString();
  }
  let strNum = num.toString();
  while(strNum.length > 1) { strNum = multiply(strNum) };
  return reps;
}

// persistence(39); // 3
persistence(999); // 4