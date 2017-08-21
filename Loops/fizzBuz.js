// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

const fizzBuzz = (n) => {
    const result = [];
    for (let i = 1; i < n + 1; i++) {
        let number = '';
        if(i % 3 === 0) { number += 'Fizz' }
        if(i % 5 === 0) { number += 'Buzz' }
        if (!number) { number = i }
        result.push(number);
    }
    return result;
};

fizzBuzz(15);