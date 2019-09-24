const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("eqArrays", () => {

  it("Should be true when using nested arrays", () => {
    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it("Should return true when comparing nested arrays", () => {
    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true)
  });
  it("Should return false when neste arrays contain different elements", () => {
    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false)
  });
  it("Should return false when nested arrays are not structured the same", () => {
    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
  it("Should return true with nested, nested arrays", () => {
    assert.equal(eqArrays([[2, 3], [4, [5, 6]]], [[2, 3], [4, [5, 6]]]), true);
  });

  it("Should return false when empty arrays are not nested the same", () => {
    assert.equal(eqArrays([[]], []), false); // => shoußld PASS
  });
  it("Should return true comparing empty arrays", () => {
    assert.equal(eqArrays([], []), true); // => shoußld PASS
  });
  it("Should return true comparing equivalent arrays", () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true); // => shoußld PASS
  });
  it("Should return false arrays aren't in order", () => {
    assert.equal(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
  });
  it("Should return true when arrays are the same", () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS

  });
  it("Should return false if types are different", () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS
  });

});
//Recursive test cases:

