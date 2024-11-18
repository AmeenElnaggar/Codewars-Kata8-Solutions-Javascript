// Code wars Kata7 Solutions

/*
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran, Chars in Haskell),
check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
*/

/*
    1) Declare object with the chars
    2) Loop over the given array and increment the key of the char
    3) Use Object.values to get array from the object
    4) Check if the array includes (3 && 2)
*/

//Solution
function checkThreeAndTwo(array) {
  const counts = { a: 0, b: 0, c: 0 };

  array.forEach(char => (counts[char] += 1));
  const values = Object.values(counts);
  return values.includes(2) && values.includes(3);
}
console.log(checkThreeAndTwo(['a', 'a', 'a', 'b', 'b']));
