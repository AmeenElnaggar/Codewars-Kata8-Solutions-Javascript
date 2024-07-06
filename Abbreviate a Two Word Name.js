// Code wars Kata8 Solutions

/*
  Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

  The output should be two capital letters with a dot separating them.

  It should look like this:
*/

/*
  1) return array of name
  2) loop over array and return firstLetter
  3) join Dott(.) between them
*/

// Solution

function abbrevName(name) {
  return name
    .split(" ")
    .map((ele) => ele.slice(0, 1).toUpperCase())
    .join(".");
}
abbrevName("ameen sayed");
