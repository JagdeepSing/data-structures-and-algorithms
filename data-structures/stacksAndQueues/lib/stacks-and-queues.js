'use strict';

const Node = require('./singly-linked-node.js');

/**
 * Stack Data Structure
 */
class Stack {
  /**
   * Constructs an instance of Stack
   */
  constructor() {
    this.top = null;
    this.length = 0;
  }

  /**
   * Adds passed in data to the stack
   * @param {*} data value to add to the stacks
   * @returns {Number} size of stack
   */
  push(value) {
    if (!value && value !== 0) {
      return this.length;
    }
    this.top = new Node(value, this.top);
    return ++this.length;
  }

  /**
   * Removes and returns value at the top of the stack
   * @returns {*|null} value at the top of the stack or null if empty stack 
   */
  pop() {
    let result = this.top;
    if (this.top) this.top = this.top.next;
    result && this.length--;
    return result ? result.value : null;
  }

  /**
   * Gets the value at the top of the stack without removing it
   * @returns {*} value at the top of the stack
   */
  peek() {
    if (!this.top) {
      console.error('Cannot peek on empty stack.');
      return null;
    }
    return this.top.value;
  }
}

/**
 * Queue Data Structure
 */
class Queue {
  /**
   * Constructs an instance of Queue
   */
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  /**
   * Adds value to the end of the queue
   * @param {*} value value to add
   * @returns {Number} size of queue after enqueued
   */
  enqueue(value) {
    if (!value && value !== 0) return this.length;
    if (!this.front && !this.back) {
      this.front = this.back = new Node(value, null);
    } else {
      this.back.next = new Node(value, null);
      this.back = this.back.next;
    }
    return ++this.length;
  }

  /**
   * Removes and returns the first value in queues
   * @returns {*} first value in queue
   */
  dequeue() { 
    let result = this.front;
    if (this.front === this.back) this.back = null;
    if (this.front) this.front = this.front.next;
    result && this.length--;
    return result ? result.value : null;
  }

  /**
   * Returns the value at the front of the queue without removing it
   * If queue is empty, throws a ReferenceError
   * @returns {*} value at the front of queue or ReferenceError
   */
  peek() {
    if (!this.front) {
      console.error('Cannot peek on empty queue.');
      return null;
    }
    return this.front.value;
  }
}

module.exports = { Stack, Queue };