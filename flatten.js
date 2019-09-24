const assertArraysEqual = require(`./assertArraysEqual`);
const eqArrays = require(`./eqArrays`);

const flatten = function(arr) {
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
};

module.exports = flatten;
