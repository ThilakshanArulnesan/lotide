const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
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

const flatten = function (arr) {
  let retArr = [];
  if (!Array.isArray(arr)) return retArr;

  for (let el of arr) { //Loops through 'outer' array
    if (Array.isArray(el)) { //If element is an array
      for (let val of el) { //Loop through elements in the array and push them in
        retArr.push(val);
      }
    } else {
      retArr.push(el); //If it wasn't array, add the element itself
    }
  }
  return retArr;
}

assertArraysEqual(flatten([1, 2, 3, 4]), [1, 2, 3, 4]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [1, 1], ["a", "b", "c"]]), [1, 1, 1, "a", "b", "c"]);
assertArraysEqual(flatten([[], 1, [1, 1], [], ["a", "b", "c"]]), [1, 1, 1, "a", "b", "c"]);
