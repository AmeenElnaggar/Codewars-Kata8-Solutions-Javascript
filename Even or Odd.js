// Code wars Kata8 Solutions

/*
Create a function that takes an integer as an argument 
and returns "Even" for even numbers or "Odd" for odd numbers.
*/

/*
   1) Use modulus and check if it return 0 or no
*/

// Solution

function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}
console.log(evenOrOdd(2));
