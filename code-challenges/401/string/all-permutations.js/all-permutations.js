'use strict';

function stringPermutations(string) {
  if (string.length < 2) {
    return string;
  }

  let permutations = [];

  for (let i = 0; i < string.length; i++) {
    // if not a unique character in string
    // prevents duplicate permutations
    if (string.indexOf(string[i]) !== i) {
      continue;
    }

    let remainingString = string.slice(0, i) + string.slice(i + 1);
    for (let subPer of stringPermutations(remainingString)) {
      permutations.push(string[i] + subPer);
    }
  }
  return permutations;
}
