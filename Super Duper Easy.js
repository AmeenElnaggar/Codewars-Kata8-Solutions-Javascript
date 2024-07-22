// Code wars Kata8 Solutions

/*
Make a function that returns the value multiplied by 50 and increased by 6.
If the value entered is a string it should return "Error".
*/

/*
    1) Check if the typeOf value is string return error
    2) Else multiple by 50 and + 6
*/

// Solution
function problem(x) {
  return typeof x === 'string' ? 'Error' : x * 50 + 6;
}
console.log(problem(5));
