# Linked List Merge Challenge

## Challenge Description

Write a function called `mergeLists` which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keey additional space down to O(1).

## Approach & Efficiency

Due to the restriction of O(1) space complexity, went with a solution that does the merge in-place. However this does have the draw back of wreaking the input lists.

The algorithm used takes the head pointer from the first passed in list and adds the nodes from the other list in every other spot, this process insures O(1) space complexity since we are not making a new linked list.

## Solution

![Whiteboard Image](./assets/linked-list-zip-merge.jpeg)

~~~~javascript

~~~~