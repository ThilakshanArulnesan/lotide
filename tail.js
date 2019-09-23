const tail = function(arr) {
  let retA = [];
  if (arr === undefined) return retA;

  for (let i = 1; i < arr.length; i++) {
    //skipping the first element, copy the rest.
    retA[i - 1] = arr[i];
  }

  return retA;

};

module.exports = tail;
