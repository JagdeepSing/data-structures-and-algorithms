'use strict';

module.exports = minAndMaxZeroRows;

function minAndMaxZeroRows(matrix) {
  let minZeros = Infinity;
  let maxZeros = -Infinity;
  let minIdx, maxIdx = 0;

  for (let row = 0; row < matrix.length; row++) {
    let numberOfZeros = _zerosInArray(matrix[row]);
    if (numberOfZeros > maxZeros) {
      maxIdx = row;
      maxZeros = numberOfZeros;
    } else if (numberOfZeros < minZeros) {
      minIdx = row;
      minZeros = numberOfZeros;
    }
  }
  return {min: minIdx, max: maxIdx};
}

function _zerosInArray(array) {
  let left = 0;
  let right = array.length-1;

  if (array[left] === 1) return 0;
  if (array[right] === 0) return array.length;

  let mid = Math.floor((right + left) / 2);

  while ( left < right && mid > 0) {
    if (array[mid - 1] === 0 && array[mid] === 1) {
      return mid;
    } else if (array[mid] === 0) {
      left = mid;
    } else {
      right = mid;      
    }
    mid = Math.floor((right + left) / 2);
  }
  return 0;
}

let matrix = [
  [0,0,0,0,0],
  [0,0,0,0,1],
  [0,0,0,1,1],
  [0,0,1,1,1],
  [0,1,1,1,1],
  [1,1,1,1,1],
];
console.log(_zerosInArray(matrix[0]));



