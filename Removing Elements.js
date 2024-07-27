// Code wars Kata8 Solutions

/*
Take an array and remove every second element from the array.
Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

/*
    1) Use filter method and moduls to filter the array with the odd indexes only
*/

//Solution
function removeEveryOther(arr) {
  return arr.filter((ele, i) => i % 2 === 0);
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
