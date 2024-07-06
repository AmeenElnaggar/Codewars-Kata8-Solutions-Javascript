// Code wars Kata8 Solutions

/*
Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. 
Health can't be less than 0.
*/

/*
  1) Check if the health-damage < 0 return 0 else return the result
*/

// Solution

function combat(health, damage) {
  return health - damage < 0 ? 0 : health - damage;
}
combat(100, 111);
