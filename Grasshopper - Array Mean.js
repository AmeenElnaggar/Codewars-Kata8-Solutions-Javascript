// Code wars Kata8 Solutions

/*
Find Mean
Find the mean (average) of a list of numbers in an array.

Information
To find the mean (average) of a set of numbers add all of the numbers together
and divide by the number of values in the list.

For an example list of 1, 3, 5, 7
*/

/*
    1) Use reduce method to calculate the total of the array elements
    2) Get the average by divide over the length of the array
*/

//Solution
const findAverage = function (nums) {
  return nums.reduce((acc, ele) => acc + ele) / nums.length;
};

console.log(findAverage([1, 2, 3]));
