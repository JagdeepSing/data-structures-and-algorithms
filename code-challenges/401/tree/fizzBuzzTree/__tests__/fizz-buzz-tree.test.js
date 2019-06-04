'use strict';

const BST = require('../../../../../data-structures/tree/tree.js').BinarySearchTree;
const fizzBuzzTree = require('../fizz-buzz-tree.js');

describe('Fizz Buzz Tree', () => {
  it('Empty tree returns empty tree', () => {
    let tree = new BST();
    
    expect(fizzBuzzTree(tree.root)).toBeNull();
  });
  
  it('tree with no values divisible by 3 or 5 remains unchanged', () => {
    let tree = new BST();
    tree.add(4);
    tree.add(8);
    tree.add(17);
    let newTree = fizzBuzzTree(tree.root);
    expect(newTree.value).toBe(4);
    expect(newTree.left).toBeNull();
    expect(newTree.right.value).toBe(8);
    expect(newTree.right.left).toBeNull();
    expect(newTree.right.right.value).toBe(17);
  });
  
  it('values divisible by 3 or 5 change', () => {
    let tree = new BST();
    tree.add(30);
    tree.add(15);
    tree.add(10);
    tree.add(3);
    tree.add(38);
    tree.add(33);
    
    //                30
    //            15      38
    //        10        33
    //     3
    
    let newTree = fizzBuzzTree(tree.root);
    
    expect(newTree.value).toBe('FizzBuzz');             // 30
    expect(newTree.left.value).toBe('FizzBuzz');        // 15
    expect(newTree.left.left.value).toBe('Buzz');       // 10
    expect(newTree.left.left.left.value).toBe('Fizz');  // 3
    expect(newTree.right.value).toBe(38);               // 38
    expect(newTree.right.left.value).toBe('Fizz');      // 33
  });
});