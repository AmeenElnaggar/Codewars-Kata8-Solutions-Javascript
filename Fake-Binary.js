// Code wars Kata8 Solutions

/*
  Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
  Note: input will never be an empty string
*/

/*
  1) Transform the string to array 
  2) loop over array and check the conditions
  3) Transform again to string
*/

// Solution

function fakeBin(x) {
  return Array.from(x)
    .map((ele) => (ele < "5" ? (ele = "0") : (ele = "1")))
    .join("");
}
fakeBin("123165496424541546451");
