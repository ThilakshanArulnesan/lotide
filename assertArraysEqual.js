

const assertArraysEqual = function (actual, expected) {
  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    console.log("One of the arguments is not an array");
  } else if (eqArrays(actual, expected)) {
    console.log(`✅✅Assertion Passed ${actual} === ${expected} ✅✅`);
  } else {

    console.log(`❗️❗️Assertion Failed ${actual} !== ${expected}❗️❗️`);
  }
};
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false; //Check first to see if sizes are the same

  for (let i in arr1) {
    if (Array.isArray(arr1[i])) {
      if (!Array.isArray(arr2[i])) return false;
      if (!eqArrays(arr1[i], arr2[i])) return false; //if true compare the rest of the array
    } else if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

//Test cases:
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should FAIL
