'use strict';

const {reverseArray, reverseArrayFun} = require('../array-reverse.js');

const methods = [reverseArray, reverseArrayFun];

methods.forEach((fun) => {
  describe(`reverse array method`, () => {
    it('returns null if given invalid input', () => {
      expect(fun()).toBeNull();
      expect(fun(2)).toBeNull();
      expect(fun('24')).toBeNull();
      expect(fun({'4': 4})).toBeNull();
    });
  
    it('reverses array correctly', () => {
      let array = [];
      expect(fun(array)).toBeDefined();
      expect(fun(array)[0]).toEqual(array[0]);

      array = [1];
      expect(fun(array)).toBeDefined();
      expect(fun(array)[0]).toEqual(array[0]);

      array = [1,3];
      let reversedArray = fun(array);
      expect(reversedArray).toBeDefined();
      expect(reversedArray[0]).toEqual(3);
      expect(reversedArray[1]).toEqual(1);

      array = [1,5,2];
      reversedArray = fun(array);
      expect(reversedArray).toBeDefined();
      expect(reversedArray[0]).toEqual(2);
      expect(reversedArray[1]).toEqual(5);
      expect(reversedArray[2]).toEqual(1);
    });
  });
});
