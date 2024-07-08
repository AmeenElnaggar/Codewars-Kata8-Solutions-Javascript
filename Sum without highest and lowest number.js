// Code wars Kata8 Solutions

/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
*/

/*
    1) Check if nums = Falsy Value or length of array <= 2 return 0
    2) If not equal the previous rules sort the array
    3) Custom the array without first and last elements
    4) Calculate the array
*/

// Solution

function sumArray(nums) {
  return !nums || nums.length <= 2
    ? 0
    : nums
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, ele) => acc + ele);
}

console.log(sumArray([]));
