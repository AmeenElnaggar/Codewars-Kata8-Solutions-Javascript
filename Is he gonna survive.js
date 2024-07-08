// Code wars Kata8 Solutions

/*
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)
*/

/*
  1) Multiply the number of dragons by 2 
  2) Check if the number of bullets >= the dragons or no
*/

// Soltuion
function hero(bullets, dragons) {
  //Get Coding!
  return bullets >= dragons * 2;
}
console.log(hero(10, 5));
