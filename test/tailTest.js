const tail = require('../tail')
const assert = require('chai').assert;

describe("#tail", () => {
  // Test Case: Check the original array
  const words = ["Yo Yo", "Lighthouse", "Labs"];

  it("returns 2,3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(tail(['5', '6']), ['6']);
  });
});
