// Code wars Kata8 Solutions

/*
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

    3 -->    15  (  3 * 5¹)
    10 -->   250  ( 10 * 5²)
*/

/*
  1) Get the length of the number 
  2) multipy 5 power of length
  3) return the num
*/

// Solution

function multiply(number) {
  return number * 5 ** String(Math.abs(number)).length;
}
console.log(multiply(10));
