'use strict';

/**
 *  searches array for value using Binary Search
 *  @param {Array} arr, sorted array
 *  @param {*} value, search key
 *  @returns {Number} -1 or index of search key
 */
module.exports = exports = (arr, value) => {
  if (!arr || (!value && value !== 0)) {
    throw new TypeError('Invalid Parameters');
  } else if (arr.length === 0) {
    return -1;
  } else if (arr.length === 1) {
    return arr[0] === value ? 0 : -1;
  }
  return search(arr, value, 0, arr.length - 1);
};

/**
 * searches an array for a given value between given indexes
 * 
 * @param {Array} arr, sorted array
 * @param {*} val, search key
 * @param {Number} left, left index
 * @param {Number} right, right index
 * @returns {Number} -1 or index
 */
function search(arr, val, left, right) {
  if (right - left < 0) {
    return -1;
  }
  let middle = Math.floor((left + right) / 2);

  if (arr[middle] === val) {
    return middle;
  } else if (arr[middle] > val) {
    // check left side of middle
    return search(arr, val, left, middle - 1);
  } else {
    // check right side of middle
    return search(arr, val, middle + 1, right);
  }
}
