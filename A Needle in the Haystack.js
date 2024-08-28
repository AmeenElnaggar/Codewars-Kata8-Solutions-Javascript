// Code wars Kata8 Solutions

/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
*/

/*
    1) Use includes method to chceck if the array include the "needle"
    2) Use indexOf method to get the index of the "needle"
*/

//Solution
function findNeedle(haystack) {
  return haystack.includes('needle')
    ? `found the needle at position ${haystack.indexOf('needle')}`
    : false;
}
console.log(
  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
);
