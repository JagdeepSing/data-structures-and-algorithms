'use strict';

// Require the module under test
const arrayShift = require('../array-shift.js');

describe('inserting invalid index', () => {
  it('negative index');

  it('decimal index');

  it('larger than length index');
});

describe('common usage', () => {
  it('inserting into empty array');

  it('inserting into even length array');

  it('inserting into odd length array');
});

describe('invalid parameters', () => {
  it('not an array', () => {

  });

  it('not an integer for index', () => {

  });
});