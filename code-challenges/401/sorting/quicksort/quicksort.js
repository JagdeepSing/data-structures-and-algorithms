'use strict';

const _swap = (array, indexA, indexB) => {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
};

const _sort3way = (array, start, end) => {
  if (start < end) {
    let lastLow = start;
    let firstHigh = end;
    const pivot = array[start];

    let i = start;

    while (i <= firstHigh) {
      if (array[i] < pivot) {
        _swap(array, i, lastLow);
        i++;
        lastLow++;
      } else if (array[i] > pivot) {
        _swap(array, i, firstHigh);
        firstHigh--;
      } else {
        i++;
      }
    }

    _sort3way(array, start, lastLow - 1);
    _sort3way(array, firstHigh + 1, end);
  }
};

const quicksort = (array) => {
  _sort3way(array, 0, array.length - 1);
};

export default quicksort;

let array = [2,1,3,6,4,9,8,7,6,3,6,9,2,6,0,4,2,6,3,7];
quicksort(array);
console.log(array);