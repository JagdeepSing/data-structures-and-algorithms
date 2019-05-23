'use strict';

const LinkedList = require('../../../../../data-structures/linkedList/lib/linked-list.js');
const merge = require('../ll-merge.js');

describe('Linked List Zipper Merge', () => {

  it('first list in the passed lists is empty.', () => {
    let listOne = new LinkedList();
    let listTwo = new LinkedList();

    listOne.append(1);
    listOne.append(2);
    listOne.append(3);

    let head = merge(listOne, listTwo);
    expect(head.value).toEqual(1);
    expect(head.next.value).toEqual(2);
    expect(head.next.next.value).toEqual(3);
    expect(head.next.next.next).toBeNull();
  });

  it('second list in the passed lists is empty.', () => {
    let listOne = new LinkedList();
    let listTwo = new LinkedList();

    listOne.append(1);
    listOne.append(2);
    listOne.append(3);

    let head = merge(listTwo, listOne);
    expect(head.value).toEqual(1);
    expect(head.next.value).toEqual(2);
    expect(head.next.next.value).toEqual(3);
    expect(head.next.next.next).toBeNull();
  });

  it('lists of equal size', () => {
    let listOne = new LinkedList();
    let listTwo = new LinkedList();

    listOne.append(1);
    listOne.append(2);
    listOne.append(3);

    listTwo.append(4);
    listTwo.append(5);
    listTwo.append(6);

    let head = merge(listOne, listTwo);
    expect(head.value).toEqual(1);
    expect(head.next.value).toEqual(4);
    expect(head.next.next.value).toEqual(2);
    expect(head.next.next.next.value).toEqual(5);
    expect(head.next.next.next.next.value).toEqual(3);
    expect(head.next.next.next.next.next.value).toEqual(6);
    expect(head.next.next.next.next.next.next).toBeNull();
  });

  it('first list is bigger', () => {
    let listOne = new LinkedList();
    let listTwo = new LinkedList();

    listOne.append(1);
    listOne.append(2);
    listOne.append(3);

    listTwo.append(4);

    let head = merge(listOne, listTwo);

    expect(head.value).toEqual(1);
    expect(head.next.value).toEqual(4);
    expect(head.next.next.value).toEqual(2);
    expect(head.next.next.next.value).toEqual(3);
    expect(head.next.next.next.next).toBeNull();
  });

  it('second list is bigger', () => {
    let listOne = new LinkedList();
    let listTwo = new LinkedList();

    listOne.append(1);
    listOne.append(2);
    listOne.append(3);

    listTwo.append(4);

    let head = merge(listTwo, listOne);
    
    expect(head.value).toEqual(4);
    expect(head.next.value).toEqual(1);
    expect(head.next.next.value).toEqual(2);
    expect(head.next.next.next.value).toEqual(3);
    expect(head.next.next.next.next).toBeNull();
  });
});