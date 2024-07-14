// Code wars Kata8 Solutions

/*
You're writing code to control your town's traffic lights. 
You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light 
and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.

*/

/*
    1) Create array of lights
    2) Get index of the current color 
    3) Return the next color from the array
*/

// Solution
function updateLight(current) {
  const lights = ['red', 'green', 'yellow'];
  const indexOfCurrent = lights.indexOf(current);
  return lights[(indexOfCurrent + 1) % 3];
}
console.log(updateLight('yellow'));
