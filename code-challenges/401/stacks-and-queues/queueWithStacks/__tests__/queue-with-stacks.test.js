'use strict';

const Queue = require('../queue-with-stacks.js');

describe('Queue', () => {
  it('instantiate an empty queue', () => {
    let q = new Queue();
    expect(q.length).toEqual(0);
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
});