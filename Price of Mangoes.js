// Code wars Kata8 Solutions

/*
Accountant time! For a given quantity and price (per mango), calculate the total cost of the mangoes.
But! Every third mango is free!

Examples
# 🥭 : Paid mango
# 🆓 : Free mango

Quantity = 2
Price = 3
Total cost ==> 6    
# Paid 2 mangoes for $3 per unit = $6; no mango for free
# 🥭🥭

Quantity = 3
Price = 3
Total cost ==> 6    
# Paid 2 mangoes for $3 per unit = $6; +1 mango for free
# 🥭🥭🆓
*/

/*
    1) Divide the quantity over 3 to get the third free mango 
    2) Substract the quantity and get the paid mangos
*/

//Solution
function mango(quantity, price) {
  return (quantity - parseInt(quantity / 3)) * price;
}
console.log(mango(10, 87));
