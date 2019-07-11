'use strict';

const findNodeWithValue = (root, value) => {
  if (!root) {
    return null;
  }

  if (root.value === value) {
    return root;
  }

  return findNodeWithValue(root.left, value) || findNodeWithValue(root.right, value);
};

module.exports = findNodeWithValue;
