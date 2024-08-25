// Code wars Kata8 Solutions

/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers
0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

/*
    1) Declare 2 variables of the total of negative numbers && count the positive nums 
    2) Check if the input is empty or null
    3) If the input not empty loop over the input with forEach method and get the value of each variable that declared before
*/
function countPositivesSumNegatives(input) {
  let positiveNums = 0;
  let negativeTotal = 0;
  if (input === null || input.length === 0) {
    return [];
  } else {
    input.forEach(ele => (ele > 0 ? positiveNums++ : (negativeTotal += ele)));
  }
  return [positiveNums, negativeTotal];
}

console.log(countPositivesSumNegatives([]));
