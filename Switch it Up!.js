// Code wars Kata8 Solutions

/*
When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.

Input: 1

Output: "One".
*/

/*
Solution(1) : 
    1) Declare variable with the numbers words
    2) Loop over the array and return the word of the given number

Solution(2) : 
    1) Return the word based on the given number 
*/

//Solutions
function switchItUp(number) {
  //Sol 1 :
  const Words = [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
  ];
  // for (let i = 0; i < Words.length; i++) {
  //   if (i === number) return Words[i];
  // }

  //Sol 2 :
  return Words[number];
}
console.log(switchItUp(9));
