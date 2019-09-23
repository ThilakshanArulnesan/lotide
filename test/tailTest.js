const tail = require('../tail')
const assertEqual = require('../assertEqual')

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
