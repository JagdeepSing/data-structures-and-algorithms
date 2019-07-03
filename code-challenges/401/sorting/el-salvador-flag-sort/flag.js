'use strict';

module.exports = flagSort;

console.log(flagSort(['b', 'w', 'b', 'b', 'w', 'w', 'w', 'w', 'b', 's', 'w']));

/*
Input = [] contains either: 
  'b' => even amount
  'w' => even amount
  's'

  O(n) time

  arrange the array so ['blue', 'white', 'shield', 'white', 'blue']
*/
function flagSort(arr) {
  if (!arr || arr.length <= 1) {
    return arr;
  }

  let totalBlues = _numOf(arr, 'b'); // O(n)
  let firstWhiteIdx = totalBlues / 2;
  let lastWhiteIdx = arr.length - 1 - firstWhiteIdx;
  let leftSwapIdx = 0;
  let rightSwapIdx = arr.length - 2;
  let blueCount = 0;

  for (let i = firstWhiteIdx; i < lastWhiteIdx; i++) {
    if (arr[i] === 'b') {
      blueCount++;

      if (!blueCount % 2) {
        _swap(arr, i, leftSwapIdx);
        leftSwapIdx++;
      } else {
        _swap(arr, i, rightSwapIdx);
        rightSwapIdx--;
      }
    }
    if (arr[i] === 's') {
      _swap(arr, i, arr.length - 1);
    }
  }

  let mid = Math.floor(arr.length / 2);
  _swap(arr, lastWhiteIdx, arr.length - 1);
  _swap(arr, mid, lastWhiteIdx);

  return arr;
}

function _swap(arr, A, B) {
  let temp = arr[A];
  arr[A] = arr[B];
  arr[B] = temp;
}

function _numOf(arr, matchVal) {
  return arr.filter((value) => value === matchVal).length;
}
