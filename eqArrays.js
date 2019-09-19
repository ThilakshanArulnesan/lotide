const assertEqual = function (actual, expected) {
  if (actual === expected) {
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

//Recursive test cases:
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
assertEqual(eqArrays([[2, 3], [4, [5, 6]]], [[2, 3], [4, [5, 6]]]), true);


assertEqual(eqArrays([[]], []), false); // => shoußld PASS
assertEqual(eqArrays([], []), true); // => shoußld PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => shoußld PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS

