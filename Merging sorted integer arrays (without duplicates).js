// Code wars Kata8 Solutions

/*
Write a function that merges two sorted arrays into a single one. The arrays only contain integers.
Also, the final outcome must be sorted and not have any duplicate.
*/

/*
    1) Use spread operator to get the elements of each parameter
    2) Use Set method to return new unique array without duplicate elements
    3) Use Array.from method to get array of all the elements 
    4) Use sort method to sort the array
*/

// Solution
function mergeArrays(a, b) {
  return Array.from(new Set([...a, ...b])).sort((a, b) => a - b);
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6]));
