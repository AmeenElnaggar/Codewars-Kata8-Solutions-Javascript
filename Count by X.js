// Code wars Kata8 Solutions

/*
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
*/

/*
    1) Create empty array 
    2) Loop over the given number to get the numbers
    3) Use push method to push the result of each iteration
*/

//Solution
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}
console.log(countBy(1, 10));
