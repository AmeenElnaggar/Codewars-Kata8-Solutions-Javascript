// Code wars Kata8 Solutions

/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.
*/

/*
    1) Use filter method to return new array with true values only
    2) Use length method to get the total length 
*/

// Solution

 function countSheeps(sheep) {
    return sheep.filter(ele=>ele===true).length
}
console.log(countSheeps([true,true,false]))