// Code wars Kata8 Solutions

/*
Complete the function that takes two integers (a, b, where a < b)
and return an array of all integers between the input parameters, including them.
*/

/*
    1) Declare empty array
    2) Loop with the start will be parameter (a)  and the end will be parameter (b+1)
*/

//Solution
function between(a, b) {
  const numbers = [];
  for (let i = a; i < b + 1; i++) {
    numbers.push(i);
  }
  return numbers;
}
console.log(between(-2, 2));
