//returns true if objects have identical keys and values
const eqObjects = function (obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false; // not the same number of keys!

  for (let key in obj1) {
    if (obj2[key]) {
      if (Array.isArray(obj1[key])) {
        if (!Array.isArray(obj2[key])) return false; // One is an array but the other isn't
        if (!eqArrays(obj1[key], obj2[key])) return false; //Check if arrays are identitical
      } else if (obj2[key] !== obj1[key]) { //Different values
        return false;
      }

    } else {
      return false;
    }
  }

  return true;
};


const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false; //Check first to see if sizes are the same

  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; //gets a function

  if (eqObjects(actual, expected)) {
    console.log(`✅✅Assertion Passed ${inspect(actual)} === ${inspect(expected)} ✅✅`);
  } else {

    console.log(`❗️❗️Assertion Failed ${inspect(actual)} !== ${inspect(expected)}❗️❗️`);
  }
};

let ob1 = {
  a: "1",
  b: "2",
  c: [1, 2]
};
let ob2 = {
  a: "1",
  b: "2",
  c: [1, 2]
};
let ob3 = {
  a: "1",
  b: "2",
  c: [1, 3]
};

assertObjectsEqual(ob1, ob2); //Should pass
assertObjectsEqual(ob1, ob3); //Should fail
