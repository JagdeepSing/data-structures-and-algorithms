'use strict';

const tree = require('../tree.js');
const Node = tree.Node;
const BinarySearchTree = tree.BinarySearchTree;
const BinaryTree = tree.BinaryTree;

describe('Tree', () => {
  it('instantiate an empty tree', () => {
    let tree = new BinarySearchTree();
    expect(tree.root).toBeNull();
  });

  it('instantiate a tree with a single root node', () => {
    let tree = new BinarySearchTree(5);
    expect(tree.root.value).toEqual(5);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  });

  it('add a left child and right child to a single root node', () => {
    let tree = new BinarySearchTree(5);
    expect(tree.root.value).toEqual(5);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
    tree.root.left = new Node(2);
    tree.root.right = new Node(10);
    expect(tree.root.left.value).toEqual(2);
    expect(tree.root.right.value).toEqual(10);
  });

  it('add method', () => {
    let tree = new BinarySearchTree(5);
    expect(tree.root.value).toEqual(5);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
    tree.add(2);
    tree.add(10);
    expect(tree.root.left.value).toEqual(2);
    expect(tree.root.right.value).toEqual(10);
    tree.add(6);
    expect(tree.root.right.left.value).toEqual(6);
  });

  it('contains method', () => {
    let tree = new BinarySearchTree();
    tree.add(5);
    tree.add(10);
    tree.add(1);
    expect(tree.contains(5)).toBeTruthy();
    expect(tree.contains(10)).toBeTruthy();
    expect(tree.contains(30)).toBeFalsy();
    expect(tree.contains(1)).toBeTruthy();
  });

  describe('Traversals', () => {
    let tree = new BinarySearchTree();
    tree.add('D');
    tree.add('B');
    tree.add('A');
    tree.add('C');
    tree.add('F');
    tree.add('E');

    it('return a collection from a pre-order traversal', () => {
      let expected = ['D', 'B', 'A', 'C', 'F', 'E'];
      let returned = tree.preOrder();
      console.log('preOrder', returned);
      // A B D 
      returned.forEach((val, idx) => {
        expect(val).toEqual(expected[idx]);
      });
    });
  
    it('return a collection from a in-order traversal', () => {
      let expected = ['A', 'B', 'C', 'D', 'E', 'F'];
      let returned = tree.inOrder();
      console.log('inOrder', returned);

      returned.forEach((val, idx) => {
        expect(val).toEqual(expected[idx]);
      });
    });
  
    it('return a collection from a post-order traversal', () => {
      let expected = ['A', 'B', 'C', 'E', 'F', 'D'];
      let returned = tree.postOrder();
      console.log('postOrder', returned);
      returned.forEach((val, idx) => {
        expect(val).toEqual(expected[idx]);
      });
    });
  });
  
  describe('findMaximumValue(root) method', () => {
    it('returns null for empty tree', () => {
      let tree = new BinaryTree();
      expect(tree.findMaximumValue(tree.root)).toBeNull();
    });
    
    it('returns max value in binary tree', () => {
      let tree = new BinaryTree();
      
      expect(tree.findMaximumValue(tree.root)).toBeNull();
      
      tree.root = new Node(5);
      expect(tree.findMaximumValue(tree.root)).toBe(5);
      
      tree.root.left = new Node(8);
      expect(tree.findMaximumValue(tree.root)).toBe(8);
      
      tree.root.right = new Node(13);
      expect(tree.findMaximumValue(tree.root)).toBe(13);
      
      tree.root.left.left = new Node(45);
      expect(tree.findMaximumValue(tree.root)).toBe(45);
      
      tree.root.left.right = new Node(23);
      expect(tree.findMaximumValue(tree.root)).toBe(45);
    });
  });
});