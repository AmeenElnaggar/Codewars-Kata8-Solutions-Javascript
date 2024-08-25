// Code wars Kata8 Solutions

/*
Your task is to make two functions ( max and min, or maximum and minimum,
etc., depending on the language ) that receive a list of integers as input,
and return the largest and lowest number in that list, respectively.
*/

/*
    1) Use Math.min && Math.max methods to get the maxmium and minimum values
*/

//Solution
const min = function (list) {
  return Math.min(...list);
};

const max = function (list) {
  return Math.max(...list);
};
