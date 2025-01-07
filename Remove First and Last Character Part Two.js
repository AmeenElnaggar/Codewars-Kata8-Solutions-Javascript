// Code wars Kata8 Solutions

/*
This is a spin off of my first kata.
You are given a string containing a sequence of character sequences separated by commas.
Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
If the input string is empty or the removal of the first and last items would cause the resulting string to be empty,
return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"
""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/

/*
    1) Declare a variable and the value is string converted to array with help of split method
    2) Check if the length of the array is greater than 2 or no 
    3) Use slice and join methods to get the expected result
*/

//Solution
function array(string) {
  const arrayFromString = string.split(',');
  return arrayFromString.length > 2
    ? arrayFromString.slice(1, -1).join(' ')
    : null;
}
console.log(array('1,2,3,4'));
