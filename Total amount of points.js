// Code wars Kata8 Solutions

/*
Our football team has finished the championship.
Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y",
where x is our team's score and y is our opponents score.
For example: ["3:1", "2:2", "0:1", ...]
Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
*/

/*
    1) Declare total for the final result
    2) Use map to loop over the array to check of (x,y)
    3) Return total 
*/

// Solution

function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}
console.log(
  points(['1:0', '2:0', '3:0', '4:4', '2:2', '3:3', '1:4', '2:3', '2:4', '3:4'])
);
