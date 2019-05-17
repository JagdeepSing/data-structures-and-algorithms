'use strict';

const LinkedList = require('../lib/linked-list.js');

describe('Linked List behaves correctly', () => {

  it('instantiate an empty linked list', () => {
    let list = new LinkedList();

    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
    expect(list.length).toEqual(0);
  });

  it('properly insert into the linked list', () => {
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