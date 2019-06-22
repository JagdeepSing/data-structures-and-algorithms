'use strict';

class HashTable {
  constructor(length) {
    this.length = length && length > 1 ? length : 100;
    this.data = new Array(this.length);
    for (let i = 0; i < this.length; i++) {
      this.data[i] = {};
    }
  }

  /**
   * Hashes given key to number, returns number.
   * If key is not an integer or string, return null
   *
   * @param {Number | String} key
   * @returns {Number} range of 0 to array size
   * @memberof HashTable
   */
  _hash(key) {
    if (typeof key !== 'string' && typeof key !== 'number') return null;

    // converts string to number representation ------------------------
    const stringSum = (key) => {
      return key.split('').reduce((accumulator, current) => {
        current = current.charCodeAt(0);
        return (accumulator += current);
      }, 0);
    };
    // ----------------------------------------------------------------

    if (typeof key === 'string') {
      key = stringSum(key);
    }
    return Math.floor(key * 599) % (this.length - 1);
  }

  /**
   * Takes in a key and returns the value from the table
   *
   * @param {Number | String} key
   * @returns {*} value associated with passed in key
   * @memberof HashTable
   */
  get(key) {
    let index = this._hash(key);
    return this.data[index][key] ? this.data[index][key] : null;
  }

  /**
   * Takes in a key and returns a boolean, indicating if the key exists in the table already.
   *
   * @param {Number | String} key
   * @returns
   * @memberof HashTable
   */
  contains(key) {
    let index = this._hash(key);
    return !!this.data[index][key];
  }

  /**
   * Takes in both the key and value.
   * - Hash key
   * - add the key and value to the table
   * - handles collisions
   *
   * @param {Number | String} key
   * @param {*} value
   * @returns
   * @memberof HashTable
   */
  add(key, value) {
    const index = this._hash(key);
    Object.assign(this.data[index], { [key]: value });
    return this.data[index][key];
  }
}

module.exports = HashTable;
