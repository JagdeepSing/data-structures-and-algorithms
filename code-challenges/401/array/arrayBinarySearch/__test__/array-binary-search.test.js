'use strict';

// Require the module under test
const arrayBinarySearch = require('../array-binary-search.js');

describe('array binary search expected output', () => {
  it('searching even length array', () => {
    let arr = [0, 1, 2, 3, 4, 5];
    expect(arrayBinarySearch(arr, 2)).toEqual(2);
    expect(arrayBinarySearch(arr, 10)).toEqual(-1);
  });
  it('searching odd length array', () => {
    let arr = [0, 1, 2, 3, 4, 5, 6];
    expect(arrayBinarySearch(arr, 2)).toEqual(2);
    expect(arrayBinarySearch(arr, 10)).toEqual(-1);
  });

  it('given example 1', () => {
    let arr = [4, 8, 15, 16, 23, 42];
    expect(arrayBinarySearch(arr, 15)).toEqual(2);
  });

  it('given example 2', () => {
    let arr = [11,22,33,44,55,66,77];
    expect(arrayBinarySearch(arr, 90)).toEqual(-1);
  });
});

describe('array binary search expected failure', () => {
  it('missing parameters', () => {
    
    expect(() => { arrayBinarySearch(); }).toThrow(TypeError);
    expect(() => { arrayBinarySearch([]); }).toThrow(TypeError);
    expect(arrayBinarySearch([], 0)).toEqual(-1);
    expect(arrayBinarySearch([1], 1)).toEqual(0);
    expect(arrayBinarySearch([1], 3)).toEqual(-1);



  });
});
