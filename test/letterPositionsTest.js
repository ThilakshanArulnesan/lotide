let letterPositions = require(`../letterPositions`);
let assert = require(`chai`).assert;
let expect = require(`chai`).expect;

describe("letterPostions", () => {

  //Test cases:
  let expectedResult = {
    l: [0],
    i: [1, 11],
    g: [2],
    h: [3, 5, 15, 18],
    t: [4, 14],
    o: [6, 19],
    u: [7, 20],
    s: [8, 21],
    e: [9, 16, 22],
    n: [12]
  };
  let out = letterPositions("lighthouse in the house");
  console.log("output", out)
  console.log("expected", expectedResult);
  it(`out should equal expected results`, () => { expect(out).to.deep.eql(expectedResult) });
  /*
    for (let lett in expectedResult) {
      it(`Should return ${expectedResult[lett]} for ${lett}`,
        () => {
          assert.equal(out[lett], expectedResult[lett]);
        });
    }
  */
});
