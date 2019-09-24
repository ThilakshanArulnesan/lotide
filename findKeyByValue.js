const findKeyByValue = function(obj, key) {
  let retS = undefined;
  for (let k in obj) {
    if (obj[k] === key) return k;
  }
  return retS;
};

module.exports = findKeyByValue;
