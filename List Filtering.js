// Code wars Kata7 Solutions

/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
*/

/*
    1) Use filter method to filter the array to get elements not string 
*/

//Solution
function filter_list(l) {
  return l.filter(ele => typeof ele !== 'string');
}
console.log(filter_list([1, 2, 'a', 'b']));
