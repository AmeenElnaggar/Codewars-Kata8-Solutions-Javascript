// Code wars Kata8 Solutions

/*
There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
*/

/*
    1) Use reduce method to calculate the classPoints
    2) Calculate the average points of the class
    3) Compare between them
*/

// Solution
function betterThanAverage(classPoints, yourPoints) {
  return (
    classPoints.reduce((acc, ele) => acc + ele) / classPoints.length <
    yourPoints
  );
}
console.log(betterThanAverage([2, 3], 5));
