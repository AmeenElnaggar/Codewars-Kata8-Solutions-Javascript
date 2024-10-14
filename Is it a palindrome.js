// Code wars Kata8 Solutions

/*
Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.
*/

/*
    1) Use toLowerCase method to make all text lowercase
    2) Use split to get array from the string 
    3) Use reverse to compare between the arrays
    4) Use join method to get the string again
*/

//Solution
function isPalindrome(x) {
  x = x.toLowerCase();
  return x === x.split('').reverse().join('');
}
console.log(isPalindrome('aba'));
