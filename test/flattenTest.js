const flatten = require(`../flatten`);
const assert = require(`chai`).assert;

describe("Check", () => {
  it("return [1,2,3,4] for [1,2,3,4]", () => {
    assert.deepEqual(flatten([1, 2, 3, 4]), [1, 2, 3, 4]);
  });
  it("return [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("return [1,2,3,4] for [1, [1, 1], [\"a\", \"b\", \"c\"]", () => {
    assert.deepEqual(flatten([1, [1, 1], ["a", "b", "c"]]), [1, 1, 1, "a", "b", "c"]);
  });


});


