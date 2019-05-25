# Stacks and Queues
<!-- Short summary or background info -->
### Stack
A stack is a data structure where you can only add or remove at one end. So the last item entered is the one returned back.

### Queue
A queue is a data structure where you can only add on one end and remove from the other end. So the oldest value is the removed each time.

## Challenge
Implement a Stack and a Queue using Nodes.

Stacks have the following methods: 
  * `push()`: add to stack
  * `pop()`: remove from stack
  * `peek()`: peek at the top value

Queues have the following methods:
  * `enqueue()`: add to queue
  * `dequeue()`: remove from queue
  * `peek()`: peek at the front of the value

## Approach & Efficiency

For both data structures, each method performs at O(1) time and space complexity, because they are at their core linked lists. For queue, I created front and back reference points which make inserting at the front and back are O(1).

## API

### Stacks:

* `push(value)`:
    * adds value to top of stack
    * **returns**: `size of stack` 
* `pop()`:
  * removes top value of stack
  * **returns**: `top value in stack`
* `peek()`:
  * peek at top value without removing
  * **returns**: `top value in stack`

### Queue:

* `enqueue(value)`:
  * adds value to back of queue
  * **returns**: `size of queue` 
* `dequeue()`:
  * removes front value of queue
  * **returns**: `top value in queue`
* `peek()`:
  * peek at front value without removing
  * **returns**: `top value in queue`