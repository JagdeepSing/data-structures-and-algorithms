'use strict';

module.exports = mergeLists;

/**
 * Zip merges two linked lists together and returns reference to the head.
 * 
 * @param {LinkedList} listOne 
 * @param {LinkedList} listTwo 
 */
function mergeLists(listOne, listTwo) {
  // no lists given
  if (!listOne && !listTwo) return null;

  // if one of the lists is empty/not passed, return the other head reference
  if (!listOne || !listOne.length) return listTwo.head;
  if (!listTwo || !listTwo.length) return listOne.head;

  let currentOne = listOne.head;
  let currentTwo = listTwo.head;

  while (currentOne && currentTwo) {
    let nextOne = currentOne.next;
    let nextTwo = currentTwo.next;

    currentOne.next = currentTwo;
    currentTwo.next = nextOne || currentTwo.next;

    currentOne = nextOne;
    currentTwo = nextTwo;
  }

  return listOne.head;
}