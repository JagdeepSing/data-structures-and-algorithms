'use strict';

const findTreePath = require('../findTreePath.js');
const BinaryTree = require('../../../../../data-structures/tree/tree.js').BinaryTree;

describe('Find Path between values in a binary tree', () => {
  let tree = new BinaryTree(8);
  tree.root.left = new BinaryTree(10).root;
  tree.root.left.left = new BinaryTree(15).root;
  tree.root.left.left.left = new BinaryTree(50).root;
  tree.root.left.left.right = new BinaryTree(22).root;
  tree.root.right = new BinaryTree(30).root;
  tree.root.right.left = new BinaryTree(20).root;
  tree.root.right.right = new BinaryTree(4).root;

  /**
   * Tree:
   *                        8
   *                  10        30
   *              15         20    4
   *          50      22
   *
   */

  it('returns null if given invalid input', () => {
    expect(findTreePath(tree.root, tree.root, tree.root)).toBeNull();
    expect(findTreePath(10, 2, 4)).toBeNull();
    expect(findTreePath(10, 2)).toBeNull();
    expect(findTreePath(10)).toBeNull();
    expect(findTreePath()).toBeNull();
  });

  it('returns null if path doesn\'t exist', () => {
    expect(findTreePath(tree.root, 20, 30)).toBeNull();
    expect(findTreePath(tree.root, 15, 20)).toBeNull();
    expect(findTreePath(tree.root, 1000, -4)).toBeNull();
    expect(findTreePath(tree.root, 15, -100)).toBeNull();
  });

  it('finds path if it exists', () => {
    expect(findTreePath(tree.root, 15, 22)).not.toBeNull();
    expect(findTreePath(tree.root, 30, 4)).not.toBeNull();
    expect(findTreePath(tree.root, 15, 15)).not.toBeNull();
    expect(findTreePath(tree.root, 8, 22)).not.toBeNull();
    expect(findTreePath(tree.root, 8, 50)).not.toBeNull();
    expect(findTreePath(tree.root, 8, 20)).not.toBeNull();

    let path = findTreePath(tree.root, 8, 15);
    expect(path.value).toEqual(8);
    expect(path.next.value).toEqual(10);
    expect(path.next.next.value).toEqual(15);
    expect(path.next.next.next).toBeNull();
  });
});
