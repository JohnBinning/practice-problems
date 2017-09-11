// Find all the elements that appear twice in this array.

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]

const findDuplicates = (nums) => {
    let dups = nums.reduce((acc, num) => {
        acc[num] ? acc[num] += 1 : acc[num] = 1;
        return acc;
    },{});

    const numKeys = Object.keys(dups).map( numb => parseInt(numb) );
    const singleDupes = numKeys.filter( num => dups[num] > 1 );
    return singleDupes;
};

findDuplicates([4,3,2,7,8,2,3,1]);

// => [2, 3]