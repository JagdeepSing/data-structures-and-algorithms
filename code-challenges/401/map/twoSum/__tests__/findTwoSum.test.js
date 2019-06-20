'use strict';

const findTwoSum = require('../findTwoSum');

describe('findTwoSum(array, value)', () => {
  describe('returns null', () => {
    it('returns null for invalid input', () => {
      expect(findTwoSum()).toBeNull();
      expect(findTwoSum([])).toBeNull();
      expect(findTwoSum({}, 8)).toBeNull();
      expect(findTwoSum('', '')).toBeNull();
      expect(findTwoSum([], [])).toBeNull();
      expect(findTwoSum({}, {})).toBeNull();
      expect(findTwoSum(3, 3)).toBeNull();
    });

    it('returns null if array doesn\'t have necessary integers', () => {
      expect(findTwoSum([1, 1, 1, 1, 2, 3, 4, -1, 40], 8)).toBeNull();
      expect(findTwoSum([1, 1, 1, 1, 2, 3, 4, -1, 40], 10)).toBeNull();
      expect(findTwoSum([1, 1, 1, 1, 2, 3, 4, -1, 40], 40)).toBeNull();
    });
  });

  describe('correct results', () => {
    it('array has all positive non-repeating values', () => {
      let result = findTwoSum([1, 2, 4, 6], 8);
      expect(result[0]).toBe(2);
      expect(result[1]).toBe(6);

      result = findTwoSum([1, 2, 4, 7], 8);
      expect(result[0]).toBe(1);
      expect(result[1]).toBe(7);
    });

    it('array has all positive, some duplicate values', () => {
      let result = findTwoSum([1, 2, 4, 4, 4, 6], 8);
      expect(result[0]).toBe(4);
      expect(result[1]).toBe(4);

      result = findTwoSum([1, 2, 2, 2, 4, 4, 9, 7], 4);
      expect(result[0]).toBe(2);
      expect(result[1]).toBe(2);
    });

    it('array has mix of positive and negative values, no duplicate values', () => {
      let result = findTwoSum([-1, 1, 2, 6, 4, -6, 7], 3);
      expect(result[0]).toBe(1);
      expect(result[1]).toBe(2);

      result = findTwoSum([-1, 1, 2, 6, 4, -6, 7], 6);
      expect(result[0]).toBe(2);
      expect(result[1]).toBe(4);
    });

    it('array has mix of positive and negative values, some duplicate values', () => {
      let result = findTwoSum([-1, -1, 1, 2, 2, 6, 6, 4, 4, -6, 7], 12);
      expect(result[0]).toBe(6);
      expect(result[1]).toBe(6);

      result = findTwoSum([-1, -1, 1, 2, 2, 6, 6, 4, 4, -6, 7], -7);
      expect(result[0]).toBe(-1);
      expect(result[1]).toBe(-6);
    });
  });
});
