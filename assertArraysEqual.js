const eqArrays = require('./eqArrays')


const assertArraysEqual = function(actual, expected) {
  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    console.log("One of the arguments is not an array");
  } else if (eqArrays(actual, expected)) {
    console.log(`✅✅Assertion Passed ${actual} === ${expected} ✅✅`);
  } else {

    console.log(`❗️❗️Assertion Failed ${actual} !== ${expected}❗️❗️`);
  }
};


module.exports = assertArraysEqual;
