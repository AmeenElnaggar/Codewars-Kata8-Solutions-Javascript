// Code wars Kata8 Solutions

/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

/*
    1) Transform string to array
    2) Reverse the array 
    3) Return it again as a string by using join method
*/

// Solution

function solution(str) {
  //   return Array.from(str).reverse().join("");
  return str.split("").reverse().join("");
}
console.log(solution("Ameen"));
