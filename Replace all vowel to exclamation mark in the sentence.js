// Code wars Kata8 Solutions

/*
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

/*
  Solution (1) : 
    1) Create vowel Characters
    2) Create array from the string 
    3) Loop over the array 
    4) Check if the vowel includes the ele or no
-------------------------------------------
  Solution (2) : 
  1) Use Regular Experssion 
  2) Check if the str have any character in the regex and replace it to !
*/

// Solution

function replace(s) {
  // Sol 1 :

  // const vowel = 'aeiou';
  // return Array.from(s)
  //   .map(ele => {
  //     return vowel.includes(ele.toLowerCase()) ? (ele = '!') : ele;
  //   })
  //   .join('');

  // Sol 2 :
  return s.replace(/[aeoiu]/gi, '!');
}
console.log(replace('ABCDe'));
