// Code wars Kata8 Solutions

//Create a function that returns the CSV representation of a two-dimensional numeric array.

/*
    1) Loop Over Array 
    2) return new Array with Commas
    3) add new line 
*/

// Solution

function toCsvText(arr) {
  const arrWithCommas = arr.map(function (ele) {
    return `${ele.join(",")}`;
  });
  return arrWithCommas.join("\n");
}
toCsvText([
  [0, 1, 2, 3, 4],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34],
]);
