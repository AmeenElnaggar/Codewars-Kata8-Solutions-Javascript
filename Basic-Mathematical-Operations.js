// Code wars Kata8 Solutions

/*
  Your task is to create a function that does four basic mathematical operations.
  The function should take three arguments - operation(string/char), value1(number), value2(number).
  The function should return result of numbers after applying the chosen operation.
*/

/*
  1) check the operation and transform it to real mathematical operation
*/

// Solution

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return "Operation must be one of + - * /";
  }
}
basicOp("*", 5, 5);
//--------------------------------------------
function basicOp(operation, value1, value2) {
  return eval(`${value1}${operation}${value2}`);
}
basicOp("*", 5, 5);
