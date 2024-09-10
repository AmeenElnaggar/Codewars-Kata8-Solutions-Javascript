// Code wars Kata8 Solutions

/*
Remove an exclamation mark from the end of a string.
For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
*/

/*
    1) Check if the last character of the string equal "!" 
    2) Use slice method and get the string without the last character
*/

//Solution
function remove(string) {
  return string[string.length - 1] === '!'
    ? string.slice(0, string.length - 1)
    : string;
}
console.log(remove('ameen!'));
