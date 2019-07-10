'use strict';

const depthFirst = require('../depthFirst/depth-first');

const hasIslands = (graph) => {
  const allVertices = Object.keys(graph.adjacencyList);
  const depthFirstVertices = depthFirst(graph.adjacencyList);
  return allVertices.length !== Array.from(depthFirstVertices).length;
};

module.exports = hasIslands;
