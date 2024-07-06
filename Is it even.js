// Code wars Kata8 Solutions

/*
In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.
*/

/*
    1) Use modulus operator and check 
        - if the result === 0 -> result is Even
        - if the result !== 0 -> result is odd
*/

// Solution

function testEven(n) {
  //Your awesome code here!
  return n % 2 === 0 ? true : false;
}
console.log(testEven(50));
