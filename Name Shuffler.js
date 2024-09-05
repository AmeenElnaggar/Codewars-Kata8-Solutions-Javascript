// Code wars Kata8 Solutions

/*
    1) Use split method to get array from str
    2) Use reverse method to reverse the array
    3) Use join method to get the string again 
*/

//Solution
function nameShuffler(str) {
  return str.split(' ').reverse().join(' ');
}
console.log(nameShuffler('john McClane'));
