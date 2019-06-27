'use strict';

/**
 * Returns a set contains the common values between two binary trees
 *
 * Complexity:
 *    Time: O(n)
 *    Space: O(n)
 *
 * @param {Binary Tree} treeOne
 * @param {Binary Tree} treeTwo
 * @returns {Set | null} : set containing common values between two binary trees
 */
module.exports = (treeOne, treeTwo) => {
  if (!treeOne || !treeTwo || !treeOne.root || !treeTwo.root) return null;
  const valueSet = treeAsSet(treeOne.root);
  return commonValueSet(treeTwo.root, valueSet);
};

/**
 *  Recursive function that takes in a binary tree node and
 *  returns set containing all the unique values in a set.
 *
 * @param {Binary Tree Node} treeNode
 * @param {Set | undefined} [set=new Set()]
 * @returns {Set | null} : set of unique values in binary tree
 */
function treeAsSet(treeNode, set) {
  if (!treeNode) return null;
  if (set === undefined) {
    set = new Set();
  }
  set.add(treeNode.value);
  treeAsSet(treeNode.left, set);
  treeAsSet(treeNode.right, set);
  return set;
}

/**
 *  Recursive function that takes in a binary tree node, a set and
 *  returns a set of the common values between the tree and the set.
 *
 * @param {Binary Tree Node} treeNode
 * @param {Set} valueSet
 * @param {Set | undefined} [set=new Set()]
 * @returns {Set | null} : set of common values
 */
function commonValueSet(treeNode, valueSet, set) {
  if (!treeNode) return null;
  if (set === undefined) {
    set = new Set();
  }
  if (valueSet.has(treeNode.value)) {
    set.add(treeNode.value);
  }
  commonValueSet(treeNode.left, valueSet, set);
  commonValueSet(treeNode.right, valueSet, set);
  return set;
}
