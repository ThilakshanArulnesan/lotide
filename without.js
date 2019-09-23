const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅Assertion Passed ${actual} === ${expected} ✅✅`);
  } else {

    console.log(`❗️❗️Assertion Failed ${actual} !== ${expected}❗️❗️`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false; //Check first to see if sizes are the same

  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

const without = function(arr1, arr2) {
  let retArr = [];
  for (let e1 in arr1) {
    let blnFound = false;

    for (let e2 in arr2) {
      if (arr2[e2] === arr1[e1]) { //Element is there! remove it
        blnFound = true; //flags this element as something to not include
        break; //optimization
      }

    }

    if (!blnFound) { //If the element was not found within the target array
      retArr.push(arr1[e1]);
    }

  }
  return retArr;
};

//Test cases:
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);


const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
