// Code wars Kata8 Solutions

/*
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
*/

// Solutions

/* 
  S1:

    1) Create a new array 
    2) Loop over the arr2 and push to the newArray
    3) Loop over the arr1 and check if have same num don't push it 
    4) Sort the newArray

  S2:
    1) Merge two arrays
    2) Get unique array 
    3) Sort the array
*/

function mergeArrays(arr1, arr2) {
  //   const newArray = [];
  //   arr2.forEach(function (ele) {
  //     newArray.push(ele);
  //   });
  //   arr1.forEach(function (ele) {
  //     if (!arr2.includes(ele)) newArray.push(ele);
  //   });
  //   return newArray.sort((a, b) => a - b);

  return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)));
}
console.log(mergeArrays([1, 2, 3, 4], [5, 4, 6, 7, 8]));
