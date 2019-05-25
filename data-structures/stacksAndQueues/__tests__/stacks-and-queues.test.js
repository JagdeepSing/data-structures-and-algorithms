'use strict';

const { Stack, Queue } = require('../lib/stacks-and-queues.js');

describe('Stack', () => {
  it('instantiate empty stack', () => {
    let stack = new Stack();
    expect(stack.length).toEqual(0);
    expect(stack.top).toBeNull();
  });

  it('push onto stack', () => {
    let stack = new Stack();
    expect(stack.top).toBeNull();
    expect(stack.push(2)).toEqual(1);
    expect(stack.top).not.toBeNull();
  });

  it('push multiple nodes onto stack', () => {
    let stack = new Stack();
    expect(stack.push(2)).toEqual(1);
    expect(stack.push(4)).toEqual(2);
    expect(stack.top).not.toBeNull();
    expect(stack.push()).toEqual(2);
  });

  it('peek the next item on stack', () => {
    let stack = new Stack();
    expect(stack.peek()).toBeNull();
    stack.push(2);
    expect(stack.peek()).toEqual(2);
    stack.push(5);
    expect(stack.peek()).toEqual(5);
    expect(stack.pop()).toEqual(5);
  });

  it('pop item off the stack', () => {
    let stack = new Stack();
    stack.push(4);
    stack.push(3);
    stack.push(2);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(4);
  });

  it('empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(4);
    stack.push(3);
    stack.push(2);
    expect(stack.length).toEqual(3);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.length).toEqual(0);
  });
});


describe('Queue', () => {
  it('instantiate an empty queue', () => {
    let q = new Queue();
    expect(q.length).toEqual(0);
    expect(q.front).toBeNull();
    expect(q.back).toBeNull();
  });

  it('enqueue onto queue', () => {
    let q = new Queue();
    expect(q.length).toEqual(0);
    expect(q.enqueue(3)).toEqual(1);
    expect(q.enqueue()).toEqual(1);
  });

  it('enqueue multiple items into a queue', () => {
    let q = new Queue();
    expect(q.length).toEqual(0);
    expect(q.enqueue(3)).toEqual(1);
    expect(q.enqueue(4)).toEqual(2);
    expect(q.enqueue(5)).toEqual(3);
    expect(q.enqueue(6)).toEqual(4);
    expect(q.enqueue(8)).toEqual(5);
    expect(q.enqueue()).toEqual(5);
  });

  it('dequeue off a queue the expected value and null if empty queue', () => {
    let q = new Queue();
    expect(q.length).toEqual(0);
    q.enqueue(3);
    q.enqueue(4);
    expect(q.length).toEqual(2);
    expect(q.dequeue()).toEqual(3);
    expect(q.dequeue()).toEqual(4);
    expect(q.length).toEqual(0);
    expect(q.dequeue()).toBeNull();
  });
  
  it('peek into a queue, seeing expected value', () => {
    let q = new Queue();
    expect(q.length).toEqual(0);
    q.enqueue(3);
    q.enqueue(4);
    q.enqueue(5);

    expect(q.peek()).toEqual(3);
    expect(q.peek()).toEqual(3);
    expect(q.dequeue()).toEqual(3);

    expect(q.peek()).toEqual(4);
    expect(q.peek()).toEqual(4);
  });
});