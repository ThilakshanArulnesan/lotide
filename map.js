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
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//Test cases:
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);

const numbers = [1, 1, 2, 3, 5, 7]
assertArraysEqual(map(numbers, number => number * 2), [2, 2, 4, 6, 10, 14]);

const empty = []
assertArraysEqual(map(empty, number => number * 2), []);
