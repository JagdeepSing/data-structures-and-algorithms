'use strict';

const depthFirst = (adjacencyList, collection = new Set(), current = Object.keys(adjacencyList)[0]) => {
  if (collection.has(current)) {
    return collection;
  }
  collection.add(current);

  adjacencyList[current].forEach((neighbor) => {
    depthFirst(adjacencyList, collection, neighbor);
  });

  return collection;
};

module.exports = depthFirst;
