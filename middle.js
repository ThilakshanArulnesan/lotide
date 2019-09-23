//const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  let len = arr.length;
  if (len < 3) return []; //if array is too small return empty array
  let mid = Math.floor(len / 2);

  if (len % 2 === 0) {//even
    return [arr[mid - 1], arr[mid]];
  } else {//odd
    return [arr[mid]];
  }
};

module.exports = middle;
