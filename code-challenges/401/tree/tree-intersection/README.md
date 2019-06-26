# Challenge Summary

Common values between two binary trees.

## Challenge Description

- Write a function called tree_intersection that takes two binary tree parameters.
- Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees.

## Approach & Efficiency

Start by creating a set containing all the values from first tree. Once this set is created, traverse the second tree and check against the set to get another set of the common values between the two trees.

This method takes care of any duplicate values since sets can't contain duplicate values.

### Big O Analysis:

#### Time: `O(n)`

- n is the combined size of the two trees

#### Space: `O(m)`

- m is the max between the size of the first tree or the height of the second tree, which is `log(n)` on average.

## Solution

![Whiteboard Solution](./assets/whiteboard.jpg)

```javascript
function treeIntersection(treeOne, treeTwo) => {
  if (!treeOne || !treeTwo || !treeOne.root || !treeTwo.root) return null;
  const valueSet = treeAsSet(treeOne.root);
  return commonValueSet(treeTwo.root, valueSet);
};

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
```
