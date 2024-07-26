// Code wars Kata8 Solutions

/*
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56
Function:
getNumberFromString(s)
*/

/*
    1) Use match with regulartExpression to match the elements
*/

// Solution
function getNumberFromString(s) {
  return +s.match(/\d/g).join('');
}

console.log(getNumberFromString('this is number: 7'));
