
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed ${actual} === ${expected} ✅✅`);
  } else {

    console.log(`❗️❗️Assertion Failed ${actual} !== ${expected}❗️❗️`);
  }
};


const findKeyByValue = function (obj, key) {
  let retS = undefined;
  for (let k in obj) {
    if (obj[k] === key) return k;

  }
  return retS;
};


// Test Cases:
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  romance: "Brooklyn Nine-Nine",
  comedy: "Brooklyn Nine-Nine",
  thriller: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "romance");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);