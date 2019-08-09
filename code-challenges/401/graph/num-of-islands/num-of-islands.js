'use strict';

const discoverIsland = function(arr, i, j, traversedLand) {
  if (i < 0 || i >= arr.length || j < 0 || !arr[i] || j >= arr[i].length) {
    return;
  }

  if (arr[i][j] === '1' && !traversedLand.has(`${i}, ${j}`)) {
    traversedLand.add(`${i}, ${j}`);
    discoverIsland(arr, i - 1, j, traversedLand);
    discoverIsland(arr, i + 1, j, traversedLand);
    discoverIsland(arr, i, j - 1, traversedLand);
    discoverIsland(arr, i, j + 1, traversedLand);
  }
};
const numIslands = function(grid) {
  let islands = 0;
  const traversedLand = new Set();
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1' && !traversedLand.has(`${i}, ${j}`)) {
        islands++;
        discoverIsland(grid, i, j, traversedLand);
      }
    }
  }
  return islands;
};

const mapWith3Islands = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

console.log(numIslands(mapWith3Islands));
