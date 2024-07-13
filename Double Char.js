// Code wars Kata8 Solutions

/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

/*
    1) Use Array.from to return array from the string
    2) Use repeat and join methods to get the result
*/

// Solution
function doubleChar(str) {
  return Array.from(str)
    .map(ele => ele.repeat(2))
    .join('');
}
console.log(doubleChar('Ameen'));
