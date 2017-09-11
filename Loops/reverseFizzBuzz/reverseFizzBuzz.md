### Directions:

Traditionally in FizzBuzz, multiples of 3 are replaced by Fizz and multiples of 5 are replaced by Buzz. 
But we could also play FizzBuzz with any other integer pair [n,m] 
whose multiples are replaced with Fizz and Buzz.

For an array of numbers, Fizzes, Buzzes and FizzBuzzes, 
find the numbers whose multiples are being replaced by Fizz and Buzz. Return them as an array [n,m]

#### Example:

reverseFizzBuzz(["Fizz","Fizz","Fizz","Fizz","Fizz","FizzBuzz"]); // => [1, 6]
reverseFizzBuzz([1,2,"Fizz",4,"Buzz"]); // => [3,5]);
reverseFizzBuzz([1,"Fizz","Buzz","Fizz",5,"FizzBuzz"]); // =>  [2,3]
reverseFizzBuzz([1,"FizzBuzz",3,"FizzBuzz",5,"FizzBuzz"]); // => [2,2]