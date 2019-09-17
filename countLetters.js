
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed ${actual} === ${expected} ✅✅`);
  } else {

    console.log(`❗️❗️Assertion Failed ${actual} !== ${expected}❗️❗️`);
  }
};

const countLetters = function (str) {
  let out = {};

  for (let lett of str) {
    if (out[lett]) { //is the letter already found or not?
      out[lett]++;
    } else {
      out[lett] = 1;
    }
  }
  return out;
}

//Test cases:
const out = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};
for (let lett in out) {
  assertEqual(countLetters("lighthouse in the house")[lett], out[lett]);
}

assertEqual(countLetters("lighthouse in the house")["a"], undefined);
