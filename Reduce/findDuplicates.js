//Find all the elements that appear twice in this array.

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]

const findDuplicates = (nums) => {
    let dups = nums.reduce((acc, num) => {
        acc[num] ? acc[num] += 1 : acc[num] = 1;
        return acc;
    },{})
    return Object.keys(dups)
    .map( numb => {
      return parseInt(numb);
    })
    .filter( num => {
      return parseInt(dups[num]) > 1;
    });
};

findDuplicates([4,3,2,7,8,2,3,1])

// => [2, 3]