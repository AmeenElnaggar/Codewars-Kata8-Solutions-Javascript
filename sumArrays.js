// Code wars Kata8 Solutions

/*
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
Examples

Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398
*/

/*
  1) Check if the array empty 
  2) Sum the array and return the total num
*/

// Solution

function sum(numbers) {
  "use strict";
  return numbers.length === 0
    ? 0
    : numbers.reduce(function (acc, ele) {
        return acc + ele;
      });
}
console.log(sum([1]));
