var assert = require("chai").assert;
var maxProfit = require("./stockMarket.js");

describe("Luhn Validate", function() {
  it("should return true if a number is a Luhn Number", function() {
    var number = [45, 24, 35, 31, 40, 38, 11];
    var result = maxProfit(number);
    assert.isTrue(result);
  });

  it("should return false if a number is NOT a Luhn Number", function() {
    var number = [45, 24, 35, 31, 40, 38, 11];
    assert.isFalse(maxProfit(number));
  });

});

