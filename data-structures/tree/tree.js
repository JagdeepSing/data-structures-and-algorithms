'use strict';

const Queue = require('../stacksAndQueues/lib/stacks-and-queues.js').Queue;

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(value = null) {
    value === null ? (this.root = null) : (this.root = new Node(value));
  }

  /**
   * Gets max value in tree by checking every node in tree
   *
   * @param node, starting node for search.
   * @returns {null|*} the max value in tree, null if empty tree
   */
  findMaximumValue(node = this.root) {
    if (node === null) return null;
    const childrenQueue = new Queue();
    childrenQueue.enqueue(node);
    let max = node.value;

    while (childrenQueue.peek() !== null) {
      let currentNode = childrenQueue.dequeue();

      if (currentNode.value > max) {
        max = currentNode.value;
      }
      if (currentNode.left !== null) {
        childrenQueue.enqueue(currentNode.left);
      }
      if (currentNode.right !== null) {
        childrenQueue.enqueue(currentNode.right);
      }
    }
    return max;
  }

  /**
   * Returns an array of the values in Binary Tree
   * preOrdered: (root, leftChild, rightChild)
   *
   * @param {Object} node
   * @param {Array} values
   * @returns {Array} array containing values in binary tree (preOrder traversal)
   */
  preOrder(node = this.root, values = []) {
    if (node) {
      values.push(node.value);
      node.left && this.preOrder(node.left, values);
      node.right && this.preOrder(node.right, values);
    }
    return values;
  }

  /**
   * Returns an array of the values in Binary Tree
   * inOrdered: (leftChild, root, rightChild)
   *
   * @param {Object} node
   * @param {Array} values
   * @returns {Array} array containing values in binary tree (inOrder traversal)
   */
  inOrder(node = this.root, values = []) {
    if (node) {
      node.left && this.inOrder(node.left, values);
      values.push(node.value);
      node.right && this.inOrder(node.right, values);
    }
    return values;
  }

  /**
   * Returns an array of the values in Binary Tree
   * postOrder: (leftChild, rightChild, root)
   *
   * @param {Object} node
   * @param {Array} values
   * @returns {Array} array containing values in binary tree (postOrder traversal)
   */
  postOrder(node = this.root, values = []) {
    if (node) {
      node.left && this.inOrder(node.left, values);
      node.right && this.inOrder(node.right, values);
      values.push(node.value);
    }
    return values;
  }
}

class BinarySearchTree extends BinaryTree {
  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      _addHelper(this.root);
    }

    function _addHelper(current) {
      if (current.value > value) {
        !current.left ? (current.left = new Node(value)) : _addHelper(current.left);
      } else {
        !current.right ? (current.right = new Node(value)) : _addHelper(current.right);
      }
    }
  }

  contains(value, current = this.root) {
    if (current === null || value === undefined) {
      return false;
    }
    if (current.value === value) {
      return true;
    } else if (current.value > value) {
      return this.contains(value, current.left);
    } else {
      return this.contains(value, current.right);
    }
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };
