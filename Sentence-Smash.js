// Code wars Kata8 Solutions

/*
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example : 

['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

/*
  1) Convert words to string 
  2) Split it and return the name
*/

// Soltuion
function smash(words) {
  return String(words).split(",").join(" ");
}
smash(["ameen", "sayed", "ahmed"]);
