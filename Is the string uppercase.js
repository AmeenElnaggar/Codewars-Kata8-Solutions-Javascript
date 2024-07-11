// Code wars Kata8 Solutions

/*
Create a method to see whether the string is ALL CAPS.
*/

/*
    1) Use this keyword to call the method
*/

// Solution 
String.prototype.isUpperCase = function(str) {
    return this==this.toUpperCase()
}