# Array Shift Challenge

## Challenge Description
Write a function called `insertShiftArray` which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Approach & Efficiency

Choose an in-place algorithm for both best possible time and space efficiency. Achieved a solution with O(n) time and O(1) memory usage.

## Solution

[Whiteboard Image](assets/array_shift.jpeg)

~~~~
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
~~~~