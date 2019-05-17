'use strict';

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

class LinkedList {
  /**
   * Create a linked list
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Inserts passed in value into the list
   *
   * @param {*} value value to insert into the list
   * @throws {Error} simple string message letting end user know that an error occurred
   */
  insert(value) {
    try {
      if (!this.head) {
        this.head = new Node(value, null);
        this.tail = this.head;
      } else {
        this.tail.next = new Node(value, null);
        this.tail = this.tail.next;
      }
      this.length++;
    } catch(err) {
      throw new Error('Error inserting value to list, please verify value was passed in correctly.');
    }
  }

  /**
   * Checks if linked list contains passed in value
   *
   * @param {*} value value to search the list for
   * @returns {boolean} true if list contains value, false otherwise
   * @throws {error} simple string message letting end user know that an error occurred
   */
  includes(value) {
    try {
      let current = this.head;
      while (current !== null) {
        if (current.value === value) {
          return true;
        }
        current = current.next;
      }
      return false;
    } catch(err) {
      throw new Error('Error includes value to list, please verify value was passed in correctly.');
    }
  }

  /**
   * Returns the linked list as an array of values, no pointers.
   *
   * @returns {Array} array containing all the values of the linked list
   * @throws {error} simple string message letting end user know that an error occurred
   */
  print() {
    try {
      let collection = [];
      let current = this.head;

      while (current !== null) {
        collection.push(current.value);
        current = current.next;
      }
      return collection;
    } catch(err) {
      throw new Error('Error printing values of list.');
    }
  }
}

module.exports = LinkedList;