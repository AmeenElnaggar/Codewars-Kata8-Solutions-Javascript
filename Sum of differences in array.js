// Code wars Kata8 Solutions

/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/

/*
Solution 1 :
    1) Use sort method to sort the array
    2) Loop over the array with reduce method and use if condition to check of the index and return the result

Solution 2 : 
    1) Check if the array is empty
    2) Use Math.max, Math.min methods and substract the values
*/

//Solutions
function sumOfDifferences(arr) {
  //Sol 1
  // arr = arr.sort((a, b) => b - a);
  // return arr.reduce((acc, ele, i) => {
  //   if (i < arr.length - 1) {
  //     acc += ele - arr[i + 1];
  //   }
  //   return acc;
  // }, 0);

  //Sol 2
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
console.log(sumOfDifferences([10, 2, 1]));
