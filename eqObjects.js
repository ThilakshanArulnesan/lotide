const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed ${actual} === ${expected} ✅✅`);
  } else {

    console.log(`❗️❗️Assertion Failed ${actual} !== ${expected}❗️❗️`);
  }
};

//returns true if objects have identical keys and values
const eqObjects = function (obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false; // not the same number of keys!

  for (let key in obj1) {
    if (obj2[key]) {


      if (Array.isArray(obj1[key])) {
        if (!Array.isArray(obj2[key])) return false; // One is an array but the other isn't
        if (!eqArrays(obj1[key], obj2[key])) return false; //Check if arrays are identitical
      } else if (typeof obj1[key] === 'object' &&
        typeof obj2[key] === 'object') { //arrays have already been filtered out in above if case.
        if (!eqObjects(obj1[key], obj2[key])) {//recursive call if they are equal objects
          return false;
        }
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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);


//New test cases for recursive eqObjects
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
