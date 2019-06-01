'use strict';

const Queue = require('../../../../data-structures/stacksAndQueues/lib/stacks-and-queues.js').Queue;

class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
    this.count = 0;
  }
  
  /**
   * Adds animal to shelter if of type 'dog' or 'cat'
   * If of some other type, return an exception.
   *
   * @param {Object} animal animal object with property type
   * @returns {Number} number of animals in shelter
   * @throws {TypeError} shelter only accepts dogs or cats
   */
  enqueue(animal) {
    if (!animal || !animal.type || (animal.type !== 'dog' && animal.type !== 'cat')) {
      throw new TypeError(`wrong shelter, we don't accept ${animal.type}s`);
    }
    if (animal.type === 'dog') {
      animal.num = ++this.count;
      this.dogs.enqueue(animal);
    } else if (animal.type === 'cat') {
      animal.num = ++this.count;
      this.cats.enqueue(animal);
    }
    return this.dogs.length + this.cats.length;
  }
  
  /**
   * Removes most senior animal of passed in preference
   * If preference is empty string, returns most senior animal out of both cats and dogs
   * If type is something other than 'dog', 'cat' or '', returns null
   *
   * @param {string} pref preference for animal type
   * @returns {Object|null} animal object if animal of preference type is available, null otherwise
   */
  dequeue(pref) {
    if (pref === '') {
      if (!this.dogs.peek()) {
        return this.cats.dequeue();
      }
      if (!this.cats.peek()) {
        return this.dogs.dequeue();
      }
      if (this.dogs.peek().num <= this.cats.peek().num) {
        return this.dogs.dequeue();
      } else {
        return this.cats.dequeue();
      }
    } else if (pref === 'dog') {
      return this.dogs.dequeue();
    } else if (pref === 'cat') {
      return this.cats.dequeue();
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;
