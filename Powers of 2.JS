// Code wars Kata8 Solutions

/*
Complete the function that takes a non-negative integer n as input,
and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/

/*
    1) Declare empty array
    2) Loop and use the given number in the iterations
    3) Use push method to push each result of 2**i
*/

//Solutions
function powersOfTwo(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(2 ** i);
  }
  return arr;
}
console.log(powersOfTwo(4));
