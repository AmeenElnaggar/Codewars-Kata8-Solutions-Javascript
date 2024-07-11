// Code wars Kata8 Solutions
/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

/*
    1) Use reduce method to get the result 
*/

// Solution

function grow(x){
    return x.reduce(function(acc,ele){
        return acc*ele
    })
}
console.log(grow([2,4,6]))