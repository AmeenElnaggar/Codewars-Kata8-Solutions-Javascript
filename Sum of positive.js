// Code wars Kata8 Solutions

/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

/*
    1) Use reduce method 
    2) Check if the current positive or negative
*/

// Solution
function positiveSum(arr) {
  return arr.reduce(function(acc,ele){
    return acc + (ele >0?ele:0)
  },0)
}
console.log(positiveSum([1,2,3,4,5]))