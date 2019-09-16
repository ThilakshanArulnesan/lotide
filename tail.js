const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed ${actual} === ${expected} ✅✅`);
  } else {

    console.log(`❗️❗️Assertion Failed ${actual} !== ${expected}❗️❗️`);
  }
};


const tail = function (arr) {
  let retA = [];
  if (arr === undefined) return retA;

  for (let i = 1; i < arr.length; i++) {
    //skipping the first element, copy the rest.
    retA[i - 1] = arr[i];
  }

  return retA;

};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test cases
assertEqual(tail(words).length, 2);
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words)[1], "Labs");

const testcase2 = ["a"];

assertEqual(tail(testcase2).length, 0);