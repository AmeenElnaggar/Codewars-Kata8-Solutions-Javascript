// Code wars Kata8 Solutions

//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

/*
  1) Loop over array 
  2) return the num * -1
*/

// Solution

function invert(array) {
  return array.map((ele) => ele * -1);
}
console.log(invert([5, 10, -55, -90, -6000]));
