'use strict';

// Require the module under test
const insertShiftArray = require('../array-shift.js');

describe('Proper insertShiftArray behavior', () => {
  it('inserting into empty array', () => {
    let result = insertShiftArray([], 3);
    expect(result[0]).toEqual(3);
  });

  it('inserting into even length array', () => {
    let result = insertShiftArray([0,1,3,4], 2);
    expect(result[2]).toEqual(2);
    expect(result.length).toEqual(5);
  });

  it('inserting into odd length array', () => {
    let result = insertShiftArray([0,1,2,4,5], 3);
    expect(result[3]).toEqual(3);
    expect(result.length).toEqual(6);
  });

  it('inserting an array', () => {
    let arr = [1,2,3];
    expect(insertShiftArray([],arr)[0]).toEqual(arr);
    expect(insertShiftArray(['a'], arr)[1][0]).toEqual(arr[0]);
  });
});

describe('invalid input for insertShiftArray', () => {
  it('input not an array', () => {
    expect(() => insertShiftArray({},3)).toThrow(TypeError);
  });

  it('no insert item given', () => {
    expect(()=> insertShiftArray([])).toThrow(TypeError);
  });

  it('no array parameter given', () => {
    expect(() => insertShiftArray()).toThrow(TypeError);
  });
});