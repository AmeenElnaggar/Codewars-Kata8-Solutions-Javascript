// Code wars Kata8 Solutions

/*
In this simple exercise, you will create a program that will take two lists of integers,
a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.
*/

/*
    1) Use Math.abs to return the total number
*/

//Solution
function findDifference(a, b) {
  return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);
}
console.log(findDifference([1, 2, 3], [4, 5, 6]));
