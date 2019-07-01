'use strict';

const minAndMaxZeroRows = require('./minAndMaxZeroRows.js');

describe('Min and Max Zero Rows in 2D array', () => {
  it('works correctly', () => {
    let matrix = [
      [0,0,0,0,0],
      [0,0,0,0,1],
      [0,0,0,1,1],
    ];

    expect(minAndMaxZeroRows(matrix).min).toEqual(0);
    expect(minAndMaxZeroRows(matrix).max).toEqual(2);
  });
});