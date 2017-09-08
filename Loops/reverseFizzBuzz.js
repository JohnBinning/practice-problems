// Traditionally in FizzBuzz, multiples of 3 are replaced by Fizz and multiples of 5 are replaced by Buzz. 
// But we could also play FizzBuzz with any other integer pair [n,m] 
// whose multiples are replaced with Fizz and Buzz.

// For an array of numbers, Fizzes, Buzzes and FizzBuzzes, 
// find the numbers whose multiples are being replaced by Fizz and Buzz. Return them as an array [n,m]

function reverseFizzBuzz(ar) {
  let fizz;
  let buzz;
  for (let i = ar.length - 1; i > -1; i--){
    if(ar[i].toString().includes('Fizz')) {
      fizz = i + 1;
    }
    if(ar[i].toString().includes('Buzz')) {
      buzz = i + 1;
    }
  } 
  
  return [fizz, buzz];
}


reverseFizzBuzz(["Fizz","Fizz","Fizz","Fizz","Fizz","FizzBuzz"]); // => [1, 6]
reverseFizzBuzz([1,2,"Fizz",4,"Buzz"]); // => [3,5]);
reverseFizzBuzz([1,"Fizz","Buzz","Fizz",5,"FizzBuzz"]) // =>  [2,3]