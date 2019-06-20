## Collision Management

### — Separate Chaining

Array of linked lists

If all values hash to same index of array, lookup time becomes O(n).

worst case loopup time is O(c) where c is number of collisions for index.



### — Open Addressing

If collision, add to next open array slot.