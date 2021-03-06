# Challenge Summary

An animal shelter for dogs and cats wants to make sure no dog or cat spends too much time at the shelter. To do this they only let you adopt the dog or cat that has been at the shelter the longest.

## Challenge Description

Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.

Implement the following methods:
- `enqueue(animal)`: adds animal to the shelter. animal can be either a dog or a cat object.
- `dequeue(pref)`: returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

## Approach & Efficiency

Used two queues, one for dogs and one for cats. Also add a num property to each dog/cat animal object before inserting into the queue in order to track which animal has been at the shelter the longest regardless of animal type.

`enqueue(animal)` and `dequeue(pref)` both have time and space complexity of **O(1)** since both methods take the same amount of time and space regardless of input.

## Solution

![whiteboard image](assets/whiteboard.jpg)