// Code wars Kata8 Solutions

/*
Numbers ending with zeros are boring.
They might be fun in your world, but not here.
Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105

Zero alone is fine, don't worry about it. Poor guy anyway
*/

/*
    1) Use toString method to convert the given number into string
    2) Use regular expression with replace method 
    3) Use Number to convert the string to number
*/

//Solution
function noBoringZeros(n) {
  return Number(n.toString().replace(/0+$/, ''));
}
console.log(noBoringZeros(1450));
