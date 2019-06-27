'use strict';

module.exports = (mapOne, mapTwo) => {
  if (!mapOne) return null;
  const resultObj = {};
  mapOne.forEach((value, key) => {
    resultObj[key] = [value, mapTwo.get(key) || null];
  });
  return resultObj;
};
