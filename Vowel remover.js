// Code wars Kata8 Solutions

/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
*/

/*
    1) Use replace method to replace any vowel character with empty string
*/

//Solution
function shortcut(string) {
  return string.replace(/[aeiou]/gi, '');
}
console.log(shortcut('ameen'));
