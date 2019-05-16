'use strict';

// Require the module under test
const arrayBinarySearch = require('../array-binary-search.js');

describe('array binary search expected output', () => {
  xit('searching even length array', () => {
    let arr = [0, 1, 2, 3, 4, 5];
    expect(arrayBinarySearch(arr, 2)).toEqual(2);
    expect(arrayBinarySearch(arr, 10)).toEqual(-1);
  });
  xit('searching odd length array', () => {
    let arr = [0, 1, 2, 3, 4, 5, 6];
    expect(arrayBinarySearch(arr, 2)).toEqual(2);
    expect(arrayBinarySearch(arr, 10)).toEqual(-1);
  });
});

describe('array binary search expected failure', () => {
  it('missing parameters', () => {
    expect(arrayBinarySearch()).toThrowError(TypeError);
  });
});
