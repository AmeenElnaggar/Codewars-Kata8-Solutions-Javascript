// Code wars Kata8 Solutions

/*
    1) Use indexOf method to get the index of the character 
        and +1 bec the base index is 0
*/

//Solution
function position(letter) {
  const alphapetic = 'abcdefghijklmnopqrstuvwxyz';
  return `Position of alphabet: ${alphapetic.indexOf(letter) + 1}`;
}
console.log(position('z'));
