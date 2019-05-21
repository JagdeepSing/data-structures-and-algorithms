'use strict';

const LinkedList = require('../lib/linked-list.js');

describe('Linked List creation and insertion behaves correctly', () => {

  it('instantiate an empty linked list', () => {
    let list = new LinkedList();

    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
    expect(list.length).toEqual(0);
  });

  it('head property points to the first node in the linked list', () => {
    let list = new LinkedList();

    list.insert(1);
    list.insert(2);
    list.insert(3);
    
    expect(list.head.value).toEqual(1);
  });

  it('includes method true for list containing value, false if not', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.includes(1)).toBeTruthy();
    expect(list.includes(2)).toBeTruthy();
    expect(list.includes(3)).toBeTruthy();

    expect(list.includes(4)).toBeFalsy();
  });

  it('properly return a collection of all values that exist in the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);

    list = list.print();
    expect(list[0]).toEqual(1);
    expect(list[1]).toEqual(2);
    expect(list[2]).toEqual(3);

  });
});

describe('Linked List insertions behave correctly', () => {
  it('.insert(value) properly inserts into the linked list', () => {
    let list = new LinkedList();
    list.insert(1);

    expect(list.head.value).toEqual(1);
    expect(list.tail.value).toEqual(1);
    expect(list.length).toEqual(1);

    list.insert(2);
    list.insert(3);
    list.insert(4);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next.value).toEqual(4);

    expect(list.tail.value).toEqual(4);
    expect(list.tail.next).toEqual(null);

    expect(list.length).toEqual(4);
  });

  it('.append(value) adds value to end of linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.length).toEqual(3);

    // expect(list.append()).toThrow();
  });

  it('.insertBefore(value, newVal) adds newValue before value', () => {
    let list = new LinkedList();
    list.append(1);
    // list: 1 -> null
    list.insertBefore(1, 2);
    // list: 2 -> 1 -> null
    list.insertBefore(2, 3);
    // list should be 3 -> 2 -> 1 -> null

    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);

    // expect(list.insertBefore()).toThrow();
  });

  it('.insertBefore(value, newVal) outputs exception if value not in list', () => {
    let list = new LinkedList();
    expect(() => list.insertBefore(2, 4)).toThrow();
    expect(() => list.insertBefore()).toThrow();
  });

  it('.insertAfter(value, newVal) adds newValue after value', () => {
    let list = new LinkedList();
    list.append(1);
    // list: 1 -> null
    list.insertAfter(1, 2);
    // list: 1 -> 2 -> null
    list.insertAfter(2, 3);
    // list should be 1 -> 2 -> 3 -> null

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
  });

  it('.insertAfter(value, newVal) outputs exception if value not in list', () => {
    let list = new LinkedList();
    expect(() => list.insertAfter(2, 4)).toThrow();
    expect(() => list.insertAfter()).toThrow();
  });

  it('.kFromTheEnd(k) properly returns kth value from end or throws exception if kth value from end doesn\'t exist', () => {
    let list = new LinkedList();

    // empty list, any value should throw error
    expect(() => list.kFromTheEnd(0)).toThrow();
    expect(() => list.kFromTheEnd(3)).toThrow();
    expect(() => list.kFromTheEnd(-1)).toThrow();

    list.append(5);

    // list with one node
    expect(list.kFromTheEnd(0)).toEqual(5);
    expect(() => list.kFromTheEnd(1)).toThrow();
    expect(() => list.kFromTheEnd(-2)).toThrow();

    list.append(7);

    // list with two nodes
    expect(list.kFromTheEnd(0)).toEqual(7);
    expect(list.kFromTheEnd(1)).toEqual(5);
    expect(() => list.kFromTheEnd(4)).toThrow();
    expect(() => list.kFromTheEnd(-3)).toThrow();


    list.append(3);
    list.append(10);

    expect(list.kFromTheEnd(0)).toEqual(10);
    expect(list.kFromTheEnd(1)).toEqual(3);
    expect(list.kFromTheEnd(2)).toEqual(7);
    expect(list.kFromTheEnd(3)).toEqual(5);
    expect(() => list.kFromTheEnd(6)).toThrow();
    expect(() => list.kFromTheEnd(-4)).toThrow();
  });
});