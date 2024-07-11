// Code wars Kata8 Solutions

/*
  Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

    Examples (input -> output)
    6, "I"     -> "IIIIII"
    5, "Hello" -> "HelloHelloHelloHelloHello"
*/

/*
    1) Use repeat method and repeat the string with the n input
*/

// Solution
function repeatStr (number, str) {
    return str.repeat(number);
  }
  console.log(repeatStr(3,"A"))