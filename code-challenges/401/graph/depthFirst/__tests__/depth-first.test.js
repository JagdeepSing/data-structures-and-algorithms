'use strict';

const depthFirst = require('../depth-first');

describe('Depth First Preorder Graph Traversal', () => {
  const list = {
    A: ['B', 'D'],
    B: ['A', 'C', 'D'],
    C: ['B', 'G'],
    D: ['A', 'B', 'E', 'F', 'H'],
    E: ['D'],
    F: ['D', 'H'],
    G: ['C'],
    H: ['D', 'F'],
  };

  const listExpected = ['A', 'B', 'C', 'G', 'D', 'E', 'F', 'H'];

  it('returns preordered collection of vertices', () => {
    expect(Array.from(depthFirst(list))).toEqual(listExpected);
  });
});
