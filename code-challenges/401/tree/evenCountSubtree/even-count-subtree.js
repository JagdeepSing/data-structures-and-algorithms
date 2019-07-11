'use strict';

const evenCount = require('../evenCount/even-count');
const findNodeWithValue = require('../findNode/find-node');

const evenCountInSubtree = (root, value) => {
  const foundNode = findNodeWithValue(value);
  if (!foundNode) {
    return null;
  }
  return evenCount(foundNode);
};

module.exports = evenCountInSubtree;
