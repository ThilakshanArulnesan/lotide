let assert = require(`chai`).assert;
let eqObjects = require(`../eqObjects`);

describe("eqObjects", () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };

  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };

  it("should be true if elements are in different order", () => {
    assert.equal(eqObjects(ab, ba), true); // => true
  });

  it("should be false when one object has an extra element", () => {
    assert.equal(eqObjects(ab, abc), false); // => true
  });

  it("Should be true if elements are reversed. ", () => {
    assert.equal(eqObjects(cd, dc), true); // => true
  });

  it("Should be false if types are different", () => {
    assert.equal(eqObjects(cd, cd2), false); // => true
  });

  it("Should work recursively", () => {
    assert.equal(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
  });



});
