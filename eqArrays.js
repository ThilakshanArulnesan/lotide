const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false; //Check first to see if sizes are the same

  for (let i in arr1) {
    if (Array.isArray(arr1[i])) {
      if (!Array.isArray(arr2[i])) return false;
      if (!eqArrays(arr1[i], arr2[i])) return false; //if true compare the rest of the array
    } else if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

module.exports = eqArrays;
