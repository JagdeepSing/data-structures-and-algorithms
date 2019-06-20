'use strict';

/**
 * Given an array of integers and a value, find a pair
 * of integers in the array that add to that value.
 *
 * Example:
 *    input:  ( [1,-2,4,2,6], 8 )
 *    output: [2, 6]
 */

/**
 *  Return a pair of values from array that add to value.
 *  Null if no such values exist.
 *
 * @export
 * @param {*} arr
 * @param {*} value
 */
const findTwoSum = (arr, value) => {
  if (!Array.isArray(arr) || typeof value !== 'number') return null;

  const pastVals = {};
  for (let i = 0; i < arr.length; i++) {
    const neededValue = value - arr[i];
    if (neededValue in pastVals) {
      return [neededValue, arr[i]];
    } else {
      pastVals[arr[i]] = i;
    }
  }
  return null;
};

module.exports = findTwoSum;
