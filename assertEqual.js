// Function implementation

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅✅Assertion Passed %s === %s ✅✅", actual, expected);
  } else {

    console.log("❗️❗️Assertion Failed %s !== %s❗️❗️", actual, expected);
  }


};

assertEqual("lighthouse labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2.0, 2);
assertEqual(1, "1");
assertEqual("id", "id");
assertEqual(3, 3);
assertEqual(1, 3);