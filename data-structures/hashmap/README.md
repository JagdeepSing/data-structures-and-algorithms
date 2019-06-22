# Hashtables

A hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

## Challenge

Implement a Hashtable with the following methods:

1. `add`: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
2. `get`: takes in the key and returns the value from the table.
3. `contains`: takes in the key and returns a boolean, indicating if the key exists in the table already.
4. `hash`: takes in an arbitrary key and returns an index in the collection.

## Approach & Efficiency

Used an array of objects, default size of array is 100 unless a length is provided when constructing the hashtable. Used objects so that all operations can be performed in the most efficent time, even if hashtable is full of collisions. This does use a bit more space compared to linear probing collision handling which simple inserts key value pair in next available slot.

**Time Complexity:**

1. `add(key, value)`: O(L) where L is the length of the key string
2. `get(key, value)`: O(L) where L is the length of the key string
3. `contains(key)`: O(L) where L is the length of the key string
4. `_hash(key)`: O(L) where L is the length of the key string

The reason for the O(L) time complexity is that each method hashes the key given into a number, the algorithm currently implemented is travering the string so it's time complexity is directly linked with the size of the key string.

**Space Complexity:**

All methods have O(1) space complexity since no storage is input size dependent.

## API

<!-- Description of each method publicly available in each of your hashtable -->

1. `new HashTable(length)`: creates hashtable of passed in length or 100 if not given
2. `add(key, value)`: adds key value pair to hashtable
3. `get(key)`: gets value associated with key from hashtable
4. `contains(key)`: returns T/F on wether hashtable contains key or not
