'use strict';

/**
 * Traverses over all nodes in a tree and changes value:
 *    if value is factor of 3 and 5, change to 'FizzBuzz'
 *    if value is factor of 3, change to 'Fizz'
 *    if value is factor of 5, change to 'Buzz'
 *
 * @param node, node of a binary tree
 * @returns {Object}
 */
function fizzBuzzTree(node) {
  if (node === null || node === undefined) return node;
  if (node.value % 3 === 0 && node.value % 5 === 0) {
    node.value = 'FizzBuzz';
  } else if (node.value % 3 === 0) {
    node.value = 'Fizz';
  } else if (node.value % 5 === 0) {
    node.value = 'Buzz';
  }
  fizzBuzzTree(node.left);
  fizzBuzzTree(node.right);
  return node;
}

module.exports = fizzBuzzTree;