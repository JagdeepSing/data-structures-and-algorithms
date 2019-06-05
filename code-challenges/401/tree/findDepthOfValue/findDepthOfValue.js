'use strict';

module.exports = findDepthOfValue;

/**
 * Function that takes in a node of a binary tree, a value, and depth of passed in node,
 * searches for a node with the value in the tree and if found returns the depth of the
 * node or null if not found.
 *
 * @param {Object} node, current node
 * @param {*} value, value to search for
 * @param {number} depth, depth of current node
 * @returns {null|number} depth of node if found, null otherwise
 */
function findDepthOfValue(node=null, value=undefined, depth=0) {
  // empty tree/subtree, return null which is false
  if (node === null || value === undefined) return null;
  // if value is found return depth;
  if (node.value === value) return depth;
  // check left subtree, pass in depth + 1. will return truthy number or null
  const leftCheck = findDepthOfValue(node.left, value, depth + 1);
  // check right subtree, pass in depth + 1. will return truthy number or null
  const rightCheck = findDepthOfValue(node.right, value, depth + 1);
  
  // return whichever returns a truthy number or null
  return leftCheck || rightCheck;
}