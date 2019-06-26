'use strict';

module.exports = (mapOne, mapTwo) => {
  const resultObj = {};
  mapOne.forEach((value, key) => {
    const secondValue = mapTwo[key] || null;
    resultObj[key] = [value, secondValue];
  });
  return resultObj;
};
