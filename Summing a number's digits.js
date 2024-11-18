// Code wars Kata7 Solutions

/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
*/

/*
    1) Check if the number is positive or negative
    2) Use toString and split method to get array of the number
    3) Loop over the array and convert each element to number and calculate the total array
*/

//Solution
function sumDigits(number) {
  number = number > 0 ? number : -number;
  return number
    .toString()
    .split('')
    .reduce((acc, ele) => acc + +ele, 0);
}
console.log(sumDigits(-21));
