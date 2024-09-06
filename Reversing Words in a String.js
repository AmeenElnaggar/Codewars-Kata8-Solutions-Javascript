// Code wars Kata8 Solutions

/*
    1) Use split method to get array from string
    2) Use reverse method to reverse the array
    3) Use join method to get the string again
*/

//Solution
function reverse(string) {
  return string.split(' ').reverse().join(' ');
}
console.log(reverse('I am an expert at this'));
