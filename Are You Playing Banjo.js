// Code wars Kata8 Solutions

/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
*/

/*
    1) Use toLowerCase method to check of the smallest characters only
    2) Use startsWith method to check if the first Character is "r"
*/

//Solution
function areYouPlayingBanjo(name) {
  return name.toLowerCase().startsWith('r')
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}
console.log(areYouPlayingBanjo('Ramy'));
