const countOnly = require(`../countOnly`);
const assert = require(`chai`).assert;

describe("CountOnly", () => {



  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

  it("Jason maps to 1", () => {
    assert.equal(result1["Jason"], 1);
  });
  it("Karima maps to undefined", () => {
    assert.equal(result1["Karima"], undefined);
  });
  it("Fang maps to 2", () => {
    assert.equal(result1["Fang"], 2);
  });

});


