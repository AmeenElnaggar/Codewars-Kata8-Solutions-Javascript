// Code wars Kata8 Solutions

/*
    1) Use new Set to get unique numbers of the array
*/

//Solution
function distinct(a) {
  return [...new Set(a)];
}
console.log(distinct([1, 2, 3, 4, 1]));
