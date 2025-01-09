// Code wars Kata8 Solutions

/*
Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
*/

/*
    1) Use includes method to check if the arr include the given item and return true or false
*/

//Solution
function include(arr, item) {
  return arr.includes(item);
}
console.log(include([1, 2, 3, 4], 3));
