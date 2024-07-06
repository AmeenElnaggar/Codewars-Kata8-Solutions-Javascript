// Code wars Kata8 Solutions

/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.
*/

/*
  1) Loop over array
  2) Check if the num isn't num convert it to num
  3) Calcuate the array and return the result
*/
function sumMix(array) {
  return array.map((ele) => +ele).reduce((acc, ele) => acc + ele);
}
console.log(sumMix(["1", "2", 3, 4, 5]));
