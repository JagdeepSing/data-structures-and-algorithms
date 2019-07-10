'use strict';

const hasIslands = require('../has-islands');

describe('Graph has islands', () => {
  it('returns false for no islands', () => {
    // fake graph data structure
    const graph = {
      adjacencyList: {
        A: ['B', 'D'],
        B: ['A', 'C', 'D'],
        C: ['B', 'G'],
        D: ['A', 'B', 'E', 'F', 'H'],
        E: ['D'],
        F: ['D', 'H'],
        G: ['C'],
        H: ['D', 'F'],
      },
    };
    expect(hasIslands(graph)).toBeFalsy();
  });

  it('returns true for has islands', () => {
    const graph = {
      adjacencyList: {
        A: ['B', 'D'],
        B: ['A', 'C', 'D'],
        C: ['B', 'G'],
        D: ['A', 'B', 'E', 'F'],
        E: ['D'],
        F: ['D'],
        G: ['C'],
        H: [],
      },
    };
    expect(hasIslands(graph)).toBeTruthy();
  });
});
