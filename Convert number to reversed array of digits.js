// Code wars Kata8 Solutions

/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

/*
    1) Use obj String to return string from the number
    2) Use (split-reverse) methods to return array from the string and reverse
    3) Use map method to return number of each string 
*/

//Solution
function digitize(n) {
  return String(n)
    .split('')
    .reverse()
    .map(ele => +ele);
}
console.log(digitize(35231));
