const assertEqualArrays = function (actual, expected) {
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

const middle = function (arr) {
  let len = arr.length;
  if (len < 3) return []; //if array is too small return empty array
  let mid = Math.floor(len / 2);

  if (len % 2 === 0) {//even
    return [arr[mid - 1], arr[mid]];
  } else {//odd
    return [arr[mid]];
  }
};

//Test cases:
assertEqualArrays(middle([1]), []);
assertEqualArrays(middle([1, 2]), []);

assertEqualArrays(middle([1, 2, 3]), [2]);
assertEqualArrays(middle([1, 2, 3, 4, 5]), [3]);

assertEqualArrays(middle([1, 2, 3, 4]), [2, 3]);
assertEqualArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

