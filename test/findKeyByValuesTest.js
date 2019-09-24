let assert = require(`chai`).assert;
let findKeysByValue = require(`../findKeyByValue`);

describe("findKeyByValues", () => {

  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    romance: "Brooklyn Nine-Nine",
    comedy: "Brooklyn Nine-Nine",
    thriller: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };

  it("should return romance for brooklyn 9-9", () => {
    assert.equal(findKeysByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "romance");

  });


});
/*
// Test Cases:
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/
