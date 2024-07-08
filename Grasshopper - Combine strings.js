// Code wars Kata8 Solutions

/*
Combine strings function
Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

Example:

combineNames('James', 'Stevens')
returns:

'James Stevens'
*/

/*
Solution (1) : 
   1) Use them in array and use join method to return the string

Solution (2) : 
   1) Return string with the 2 parameters 
*/

// Solution
function combineNames(firstName, lastName) {
  // Sol (1)
  // return [firstName, lastName].join(' ');

  // Sol (2)
  return `${firstName} ${lastName}`;
}

console.log(combineNames('Ameen', 'Sayed'));
