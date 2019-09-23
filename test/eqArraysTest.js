const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

console.log(eqArrays);
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

