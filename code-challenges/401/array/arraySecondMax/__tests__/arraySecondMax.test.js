'use strict';

const methods = require('../arraySecondMax.js');

methods.forEach((method, idx) => {
  describe(`second max in array, method ${idx + 1}`, () => {
    it('returns null for invalid input', () => {
      expect(method([])).toBeNull();
      expect(method([1])).toBeNull();
    });

    it('returns second largest value', () => {
      expect(method([-3, -4,-10, 10, 20, 3, 5, 1, 2])).toEqual(10);
      expect(method([1, 2, 3, 5])).toEqual(3);
      expect(method([5, 6, 2, 1, -3])).toEqual(5);
      expect(method([1,2,5,4])).toEqual(4);
      expect(method([-10, -4, -2, -8, -9])).toEqual(-4);
    });
  });
});