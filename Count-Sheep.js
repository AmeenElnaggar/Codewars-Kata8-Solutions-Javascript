// Code wars Kata8 Solutions

/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

*/

/*
    1) Declare variable his value empty string
    2) Loop over the number
    3) Return the variable after add the number 
*/

// Solution

const countSheep = function (num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    str += `${i + 1} sheep...`;
  }
  return str;
};
countSheep(5)
