'use strict';

/** Class representing a single node of data */
class Node {
  /**
   * Create a Node
   *
   * @param {*} value
   * @param {*} next
   */
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = Node;