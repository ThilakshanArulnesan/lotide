# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @thilakshan.arulnesan/lotide`

**Require it:**

`const _ = require('@thilakshan.arulnesan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation


The following functions are currently implemented:

* `head(array)`: Given an array, will return the first element.
* `tail(...)`: Given an array, will return an array containing everything except the first element.
* `eqArrays(...)`: Checks if two arrays are equal and returns a boolean. 
* `assertArraysEqual(...)`: Checks if two arrays are equivalent and prints out to a log of the test.
* `middle(...)`: Returns the middle element (if there are an even number of elements, the middle two elements are returned instead).
* `assertEqual(...)`: Checks if two elements are equal
* `countLetters(...)`: Given a string, returns an object with every letter in the string as a key and the values as the number of time that letter occurs.
* `countOnly(...)`: Given an array and an object indicating which strings to look for (keys = string, values = true/false), this function will return an object containing indicating how many times the string appears in the array. 
* `eqObjects(...)`: Checks if two objects are equivalent (same keys and values) and returns a boolean.
* `assertObjectsEqual(...)`: Prints out whether two arrays are equal or not
* `findKey(...)`: Given an object and a function will return all the keys that satisfy the function.
* `findKeyByValue(...)`:  Given an object and a value, returns the first key in the object that has the given value.
* `flatten(...)`: Given an array that contains sub-arrays, returns an array containing a single array containing no subarrays but contains all the original elements.
* `letterPositions(...)`: Given as string, returns an object which has all the letters as keys and the value is an array of all the indexes where the letter appears.
* `map(...)`: Given an array and a function, map will return an array where the callback is applied to each element.
* `takeUntil(...)`: Given an array and a function, returns all elements from index 0 until the first element which causes the function to return false.
* `without(...)`: Given two arrays, array1 and array2, will return the subset of elements in array1 that are NOT in array2 (this is returned as an array).

