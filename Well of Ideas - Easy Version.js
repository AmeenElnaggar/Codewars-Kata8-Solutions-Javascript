// Code wars Kata8 Solutions

/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
If there are no good ideas, as is often the case, return 'Fail!'.
*/

/*
    1) Check if the array include "good"
    2) Return filterdArray with "good" only
    3) Get the length of the array 
    4) Use the conditions to return the result 
*/

// Solution
function well(x) {
  //   let filterdArray;
  //   if (x.includes("good")) {
  //     filterdArray = x.filter(function (ele) {
  //       return ele === "good";
  //     });
  //     if (filterdArray.length > 2) {
  //       return "I smell a series!";
  //     } else {
  //       return "Publish!";
  //     }
  //   } else {
  //     return "Fail";
  //   }

  const arrayOfGoodLength = x.filter(function (ele) {
    return ele === "good";
  }).length;
  if (arrayOfGoodLength)
    return arrayOfGoodLength > 2 ? "I smell a series!" : "Publish!";
  return "Fail!";
}
console.log(well(["bad", "bad", "bad"]));
