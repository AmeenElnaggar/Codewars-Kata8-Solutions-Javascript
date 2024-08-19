// Code wars Kata8 Solutions

/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 
*/

/*
    1) Loop over the numbers and get the square of this num
    2) Use reduce method to get the total of the array
*/

//Solution
function squareSum(numbers) {
  return numbers.map(ele => ele ** 2).reduce((acc, ele) => acc + ele, 0);
}
console.log(squareSum([1, 2, 2]));
