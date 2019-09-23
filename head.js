const assertEqual = require('./assertEqual');


const head = function(arr) {
  if (arr === undefined) return undefined;

  return arr[0];

};
module.exports = head;
