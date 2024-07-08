// Code wars Kata8 Solutions

/*
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", 'o')  =>  1
("Hello", 'l')  =>  2
("", 'z')       =>  0
*/

/*
  1) Create counter and default value is 0
  2) Convert string to array and loop over the array
  3) Check if the element === letter increment counter by 1 
*/

// Solution

function strCount(str, letter) {
  let count = 0;
  str.split('').forEach(ele => {
    ele === letter ? count++ : 0;
  });
  return count;
}
strCount('Hello', 'o');
