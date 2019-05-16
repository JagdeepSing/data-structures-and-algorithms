'use strict';

/**
 *  searches array for value using Binary Search
 *  @param {Array} arr, sorted array
 *  @param {*} value, search key
 *  @returns {Number} -1 or index of search key
 */
module.exports = function(arr, value) {
  if (!arr || (!value && value !== 0)) {
    throw TypeError();
  } else if (arr.length === 0) {
    return -1;
  } else if (arr.length === 1) {
    return arr[0] === value ? 0 : -1;
  } else {
  }
};

/**
 *
 * @param {Array} arr, sorted array
 * @param {*} val, search key
 * @param {Number} left, left index
 * @param {Number} right, right index
 * @returns {Number} -1 or index
 */
function search(arr, val, start, end) {
  if (end - start > 1) {
  } else {
  }
}
