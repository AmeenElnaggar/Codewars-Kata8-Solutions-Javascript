// Code wars Kata8 Solutions

/*
  Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

/*
Solution (1) : 
    1) Use replaceAll and replace ! to empty string

Solution (2) :
    2) Use replace with RegularExpression
*/
function removeExclamationMarks(s) {
  return s.replaceAll('!', '');
  //   return s.replace(/!/gi, '');
}
console.log(removeExclamationMarks('Hello World !!'));
