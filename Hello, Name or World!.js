// Code wars Kata8 Solutions

/*
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World!
if name is not given (or passed as an empty String).
Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"
*/

/*
    1) Check if the name is defined or undefined
    2) Use toUpperCase method for the first character
    3) Use slice method to get the string without the first character
*/

//Solution
function hello(name) {
  return `Hello, ${
    name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : 'World'
  }!`;
}
console.log(hello('johN'));
