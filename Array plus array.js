// Code wars Kata8 Solutions

/*
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

/*
Solution (1) : 
    1) Loop over each array and calculate the total 
    2) Return the sum of 2 arrays

Solution (2) : 
    1) Use spred operator in any array 
    2) Use Es6 method -> flat to flat the 2 arrays into 1 big array
    3) Loop over the array and return the result 
*/

// Solution :

function arrayPlusArray(arr1, arr2) {
  // Sol (1) :
  //   return (
  //     arr1.reduce((acc, ele) => acc + ele) + arr2.reduce((acc, ele) => acc + ele)
  //   );

  // Sol (2) :

  return [arr1, [...arr2]].flat(1).reduce((acc, ele) => acc + ele);
}
console.log(arrayPlusArray([1, 2, 3], [4, 5]));
