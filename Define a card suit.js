// Code wars Kata8 Solutions

/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

/*
    1) Create object with the suitCards
    2) Use Nullish collasing to check and get the value of each card
*/

//Solution
function defineSuit(card) {
  const suitCard = {
    '♣': 'clubs',
    '♦': 'diamonds',
    '♥': 'hearts',
    '♠': 'spades',
  };

  return suitCard[card[1]] ?? suitCard[card[2]];
  //   return card[1];
}
console.log(defineSuit('10♦'));
