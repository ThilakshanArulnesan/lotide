// Function implementation

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed ${actual} === ${expected} ✅✅`);
  } else {

    console.log(`❗️❗️Assertion Failed ${actual} !== ${expected}❗️❗️`);
  }


};

assertEqual("lighthouse labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2.0, 2);
assertEqual(1, "1");
assertEqual("id", "id");
assertEqual(3, 3);
assertEqual(1, 3);