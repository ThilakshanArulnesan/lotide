const eqArrays = require(`./eqArrays`);

//returns true if objects have identical keys and values
const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false; // not the same number of keys!

  for (let key in obj1) {
    if (obj2[key]) {


      if (Array.isArray(obj1[key])) {
        if (!Array.isArray(obj2[key])) return false; // One is an array but the other isn't
        if (!eqArrays(obj1[key], obj2[key])) return false; //Check if arrays are identitical
      } else if (typeof obj1[key] === 'object' &&
        typeof obj2[key] === 'object') { //arrays have already been filtered out in above if case.
        if (!eqObjects(obj1[key], obj2[key])) {//recursive call if they are equal objects
          return false;
        }
      } else if (obj2[key] !== obj1[key]) { //Different values
        return false;
      }

    } else {
      return false;
    }
  }

  return true;
};
module.exports = eqObjects;
