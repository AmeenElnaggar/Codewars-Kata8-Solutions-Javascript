// Code wars Kata8 Solutions

/*
  Write a function which calculates the average of the numbers in a given list.
  Note: Empty arrays should return 0.
*/

/*
  1) Check if the array is fulsy value
  2) calculate the average of the array
*/

// Solution

function findAverage(array) {
  if (array === null || array.length === 0) return 0;
  return array.reduce((acc, ele) => acc + ele) / array.length;
}
console.log(findAverage([1, 2, 3]));
