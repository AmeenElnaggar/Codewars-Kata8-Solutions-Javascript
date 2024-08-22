// Code wars Kata8 Solutions

/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

/*
    1) Use modulas to check if the number is even or odd
*/

//Solution
function simpleMultiplication(number) {
  return number % 2 ? number * 9 : number * 8;
}
console.log(22);
