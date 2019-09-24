

const letterPositions = function(sent) {
  const out = {};
  // logic to update results here
  for (let i in sent) {
    if (sent[i] === " ") continue;
    if (out[sent[i]]) { //is the letter already found or not?
      out[sent[i]].push(Number(i));
    } else {
      out[sent[i]] = [];
      out[sent[i]].push(Number(i));
    }
  }

  return out;
};
module.exports = letterPositions;

