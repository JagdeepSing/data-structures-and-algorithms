const reverseArray = require('./array-reverse.js');

let nums = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(nums);
console.log('=>');
console.log(reverseArray(nums));

console.log('----------------');

let nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(nums2);
console.log('=>');
console.log(reverseArray(nums2));

console.log('----------------');

let nums3 = [1];

console.log(nums3);
console.log('=>');
console.log(reverseArray(nums3));

console.log('----------------');

let nums4 = [];

console.log(nums4);
console.log('=>');
console.log(reverseArray(nums4));