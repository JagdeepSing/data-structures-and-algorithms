'use strict';

const Stack = require('../../../../data-structures/stacksAndQueues/lib/stacks-and-queues.js').Stack;

class PseudoQueue {
  constructor() {
    this.enStack = new Stack();
    this.deStack = new Stack();
    this.length = 0;
  }

  /**
   * Add value to queue
   * @param {*} value 
   */
  enqueue(value) {
    if ( value && value !== 0 ) {
      this.enStack.push(value);
      this.length++;
    }
    return this.length;
  }

  /**
   * Remove first value in queue
   * @returns {*} first value in queue
   */
  dequeue() {
    if ( this.deStack.peek() !== null ) {
      this.length--;
      return this.deStack.pop();
    }
    while ( this.enStack.peek() !== null ) {
      this.deStack.push(this.enStack.pop());
    }
    if (this.length > 0) this.length--;
    return this.deStack.pop();
  }
}

module.exports = PseudoQueue;
