# Array Binary Search

## Challenge

Write a function called `BinarySearch` which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array's element that is equal to the search key or -1 if the element does not exist.

## Approach & Efficiency

Since the array is sorted, can look at the middle value of the array to see if it's greater than or less than the search key.

- If the middle value is greater than the search key, the search key must be to the left of the middle value if it exists in the array.

- If the middle value is less than the search key, the search key must be to the right of the middle value if it exists in the array.

- If the middle value is equal to the search key, return the middle index.

- Repeat this process until the value is found or we run out of array to check, in which case we return `-1`;

This approach has

- time complexity of `O(log n)`
- space complexity of `O(1)`.

## Solution

[Whiteboarding]('./assets/array_binary_search.jpg')

```
function search(arr, val, left, right) {
  if (right - left < 0) {
    return -1;
  }
  let middle = Math.floor((left + right) / 2);

  if (arr[middle] === val) {
    return middle;
  } else if (arr[middle] > val) {
    // check left side of middle
    return search(arr, val, left, middle - 1);
  } else {
    // check right side of middle
    return search(arr, val, middle + 1, right);
  }
}
```
