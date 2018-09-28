
// Create a function maxProfit, which, given a list of stock prices for a given day, returns the maximum profit that could have been made by buying a stock at the given price and then selling the stock later on. For example if the input is: [45, 24, 35, 31, 40, 38, 11] then your program should return 16 because if you bought the stock at $24 and sold it at $40, a profit of $16 was made and this is the largest profit that could be made. If no profit could have been made, return -1.


function maxProfit(boughtAt, input) {
  var index = input.findIndex(function(el) { return el===boughtAt});
  var afterBought = input.slice(index+1);
  var maxNext = Math.max(...afterBought);

  if (!maxNext) {
    console.log("DNE")
  }
  if (maxNext <= boughtAt) {
    console.log("No profit possible");
    return;
  } else {
    return console.log(maxNext - boughtAt);
  }
}


a = [45, 24, 35, 31, 40, 38, 11];
b = 24;
(maxProfit(b,a));
(maxProfit(0,a));
(maxProfit(40,a));
(maxProfit(11,a));