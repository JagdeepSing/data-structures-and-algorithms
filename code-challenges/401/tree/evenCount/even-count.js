'use strict';

const evenCount = (root, count = 0) => {
  if (!root) {
    return count;
  }
  if (!(root.value % 2)) {
    count++;
  }
  count += evenCount(root.left);
  count += evenCount(root.right);
  return count;
};

module.exports = evenCount;
