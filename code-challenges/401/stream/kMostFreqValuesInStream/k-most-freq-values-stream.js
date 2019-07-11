'use strict';

const getMaxValueKey = (map) => {
  let max = [null, -1];
  for (let entry of map) {
    if (entry[1] > max[1]) {
      max = [...entry];
    }
  }
  map.delete(max[0]);
  return max[0];
};

const getMaxCount = (stream, k) => {
  let char = stream.getNext();
  const freqMap = new Map();

  while (char) {
    if (freqMap.has(char)) {
      freqMap.set(char, freqMap.get(char) + 1);
    } else {
      freqMap.set(char, 1);
    }
    char = stream.getNext();
  }

  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(getMaxValueKey(freqMap));
    console.log(result);
  }
  return result;
};

module.exports = getMaxCount;
