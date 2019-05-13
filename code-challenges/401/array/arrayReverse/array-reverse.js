'use strict';

/**
 * In-place reverses the order of elements in specified array.
 * Returns null if invalid array parameter
 * @param {Array} arr
 * @return {*} arr or null
 */
function reverseArray(arr) {
  // if passed in variable arr is not an array
  if (!arr.isArray()) return null;
  // if passed in arr is of length 0 or 1, it is already reversed.
  if (arr.length <= 1) return arr;

  for (let i = 0; i < (arr.length - 1) / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
  }
  return arr;
}