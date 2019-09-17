
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


const letterPositions = function (sent) {
  const out = {};
  // logic to update results here
  for (let i in sent) {

    if (out[sent[i]]) { //is the letter already found or not?
      out[sent[i]].push(Number(i));
    } else {
      out[sent[i]] = [];
      out[sent[i]].push(Number(i));
    }
  }

  return out;
};




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


for (let lett in expectedResult) {
  assertArraysEqual(letterPositions("lighthouse in the house")[lett], expectedResult[lett]);
}



