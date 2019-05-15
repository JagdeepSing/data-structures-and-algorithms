'use strict';

module.exports = exports = insertShiftArray;


function insertShiftArray(arr, item) {
  // if passed in variable arr is not an array
  if (typeof item === 'undefined') throw new TypeError;
  if (!Array.isArray(arr)) throw new TypeError;
  if (arr.length === 0) return [item];

  for (let i = arr.length; i > Math.ceil(arr.length / 2); i--) {
    arr[i] = arr[i - 1];
  }
  arr[Math.ceil(arr.length / 2)] = item;

  return arr;
}