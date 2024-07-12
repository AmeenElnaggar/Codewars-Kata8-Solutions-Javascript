// Code wars Kata8 Solutions

/*
Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
*/

/*
Solution (1) 
    1) Create 2 arrays one for rating and another for tips 
    2) Get the rating index 
    3) Check if ratingArray include the rating or no and return the result

Solution (2) 
    1) Creat object for the rating and value of each rating is the tip
*/

// Solution
function calculateTip(amount, rating) {
  // Sol(1):
  //   const ratingsArray = ['terrible', 'poor', 'good', 'great', 'excellent'];
  //   const tipsArray = [0, 0.05, 0.1, 0.15, 0.2];
  //   const ratingIndex = ratingsArray.indexOf(rating.toLowerCase());
  //   return ratingsArray.includes(rating.toLowerCase())
  //     ? Math.ceil(amount * tipsArray[ratingIndex])
  //     : 'Rating not recognised';

  // Sol(2):
  const TIPS = {
    terrible: 0.0,
    poor: 0.05,
    good: 0.1,
    great: 0.15,
    excellent: 0.2,
  };

  rating = rating.toLowerCase();

  return rating in TIPS
    ? Math.ceil(TIPS[rating] * amount)
    : "Rating not recognised";
}
console.log(calculateTip(20, "excellent"));
