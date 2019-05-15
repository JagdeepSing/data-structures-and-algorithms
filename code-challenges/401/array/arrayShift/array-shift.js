'use strict';

module.exports = exports = insertShiftArray;


function insertShiftArray(arr, item) {
  if (typeof item === 'undefined') throw new TypeError;
  if (!Array.isArray(arr)) throw new TypeError;
  if (arr.length === 0) return [item];

  for (let i = arr.length; i > Math.floor(arr.length / 2); i--) {
    arr[i] = arr[i - 1];
  }
  arr[Math.floor(arr.length / 2)] = item;

  return arr;
}