'use strict';

const Node = require('../../../../data-structures/linkedList/lib/node.js');

/**
 *  Finds path between two values in a binary tree.
 *  Returns path from value A to value B as linked list
 *  @param {Node} root : Root of binary tree
 *  @param {Number} valA : Start value for path
 *  @param {Number} valB : End value for path
 *  @returns {Linked List} : Linked List representing path from value A to value B
 */
module.exports = (root, valA, valB) => {
  let nodeA = _findInTree(root, valA);
  if (nodeA && (nodeA.left || nodeA.right)) {
    return _findPath(nodeA, valB);
  }
  return null;
};

/**
 *  Finds a value in in binary tree.
 *  Returns Tree with root value equal to passed in value
 *
 * @param {Node} root : Root of binary tree
 * @param {Number} valA : value to search tree for
 * @returns {Node} : root node of Binary tree with value equal to passed in value
 */
function _findInTree(root, valA) {
  if (!root) {
    return null;
  }
  if (root.value === valA) {
    return root;
  }
  return _findInTree(root.left, valA) || _findInTree(root.right, valA);
}

/**
 *  Finds path from passed root binary tree and passed value if it exists in subtree
 *
 * @param {Node} node :
 * @param {Number} valB :
 * @returns {Node}
 */
function _findPath(node, valB) {
  if (!node) {
    return null;
  }
  if (node.value === valB) {
    return new Node(valB);
  }
  let linkedList = _findPath(node.left, valB) || _findPath(node.right, valB);
  if (linkedList) {
    let currentNode = new Node(node.value);
    currentNode.next = linkedList;
    return currentNode;
  }
  return null;
}
