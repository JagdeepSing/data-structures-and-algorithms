'use strict';

const Node = require('./node.js');

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
   * Inserts passed in value into the list at the beginning
   *
   * @param {*} value value to insert into the list
   * @throws {Error} simple string message letting end user know that an error occurred
   */
  insert(value) {
    if (!value && value !== 0) throw new Error('Invalid input.');
    let newHead = new Node(value, this.head);
    // if list is empty (inserting first value into list)
    if (!this.head && !this.tail) {
      this.tail = newHead;
    }
    this.head = newHead;
    this.length++;
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

  /**
   * Add new node with the given value to the end of the list
   * @param {*} value 
   */
  append(value) {
    if (value || value === 0) {
      if (!this.head && !this.tail) {
        this.head = new Node(value, null);
        this.tail = this.head;
      } else {
        this.tail.next = new Node(value, null);
        this.tail = this.tail.next;
      }
      this.length++;
    } else {
      throw ('Invalid Input');
    }
  }

  /**
   * Add newVal before value in list. if value not in list, throw exception
   * 
   * @param {*} value 
   * @param {*} newVal 
   */
  insertBefore(value, newVal) {
    if (value || value === 0) {
      let newNode = new Node(newVal);

      // // if value is head value
      if (this.head.value === value) {
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return;
      }

      let current = this.head;
      while (current !== null) {
        if (current.next && current.next.value === value) {
          newNode.next = current.next;
          current.next = newNode;
          this.length++;
          return;
        } else {
          current = current.next;
        }
      }
      throw 'Exception';
    }
    throw 'Invalid Input';
  }

  /**
   * Add newVal after value in list. If value doesn't exist, throw exception
   * 
   * @param {*} value 
   * @param {*} newVal 
   */
  insertAfter(value, newVal) {
    if (value || value === 0) {
      let current = this.head;

      while (current != null) {
        if (current.value === value) {
          let newNode = new Node(newVal, current.next);
          current.next = newNode;
          if (current === this.tail) {
            this.tail = newNode;
          }
          this.length++;
          return;
        } else {
          current = current.next;
        }
      }
      throw 'Exception';
    }
    throw 'Invalid Input';
  }

  /**
   * Get kth value from the end of the linked list
   * 
   * @param {integer} k 
   * @throws {String} if kth value doesn't exist or k isn't a number
   */
  kFromTheEnd(k) {
    if (typeof k !== 'number' || k > this.length - 1 || k < 0) {
      throw 'Exception';
    }
    if (k === 0) { return this.tail.value; }
    let current = this.head;
    let i = this.length - k - 1;
    while (i > 0) {
      current = current.next;
      i -= 1;
    }
    return current.value;
  }
}

module.exports = LinkedList;