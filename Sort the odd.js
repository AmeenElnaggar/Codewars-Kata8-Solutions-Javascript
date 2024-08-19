// Code wars Kata6 Solutions

/*
You will be given an array of numbers.
You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
*/

/*
    1) Loop over the array with filter method and get the odd numbers
    2) Use sort method to sort the odd array
    3) Loop over the array with map method and check with modulas
      if the element is odd use shift method to get the first element from the sorted odd array 
*/

//Solution
function sortArray(array) {
  const odd = array.filter(x => x % 2).sort((a, b) => a - b);
  return array.map(x => (x % 2 ? odd.shift() : x));
}
console.log(sortArray([5, 3, 2, 8, 1, 4]));
