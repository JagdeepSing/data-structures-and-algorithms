'use strict';

// Method one ------------------------------------------------------

/**
 * Returns the second largest value in an array
 * If array is empty or has less than 2 values, returns null;
 * @param {Array} arr 
 * @returns {Number|null} second largest value in array 
 */
function findSecondMax1(arr) {
  if (arr.length <= 1) return null;

  let max1 = arr[0];
  let max2 = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i]  > max2) {
      max2 = arr[i];
    }
  }
  return max2;
}

// Method two ------------------------------------------------------

/**
 * Returns the second largest value in an array
 * If array is empty or has less than 2 values, returns null;
 * @param {Array} arr 
 * @returns {Number|null} second largest value in array 
 */
function findSecondMax2(arr) {
  if (arr.length <= 1) return null;

  let maxIdx = findMax(arr).idx;
  arr.splice(maxIdx, 1);
  return findMax(arr).max;
}


/**
 * Returns the max value in an array and it's idx
 *
 * @param {Array} arr
 * @returns {Object} { idx, max }
 */
function findMax(arr) {
  let idx = 0;
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      idx = i;
      max = arr[i];
    }
  }

  return {idx, max};
}

// Method three ----------------------------------------------------

/**
 * Returns the second largest value in an array
 * If array is empty or has less than 2 values, returns null;
 * @param {Array} arr 
 * @returns {Number|null} second largest value in array 
 */
function findSecondMax3(arr) {
  if (arr.length <= 1) return null;

  arr.sort((a,b) => a - b); // O(n^2)

  return arr[arr.length - 2];
}

// -----------------------------------------------------------------

module.exports = [findSecondMax1, findSecondMax2, findSecondMax3];