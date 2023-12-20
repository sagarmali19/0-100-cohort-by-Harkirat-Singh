// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push()
function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);
// Original Array: [ 1, 2, 3 ]
// After push: [ 1, 2, 3, 4 ]

// pop()
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);
// Original Array: [ 1, 2, 3 ]
// After pop: [ 1, 2 ]

// shift()
function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);
// Original Array: [ 1, 2, 3 ]
// After shift: [ 2, 3 ]

// unshift()
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);
// Original Array: [ 1, 2, 3 ]
// After unshift: [ 0, 1, 2, 3 ]

// concat()
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);
// Original Arrays: [ 1, 2, 3 ] [ 4, 5, 6 ]
// After concat: [ 1, 2, 3, 4, 5, 6 ]

// forEach()
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function(item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);
// Original Array: [ 1, 2, 3 ]
// 1 0
// 2 1
// 3 2

// map()
function mapExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.map(function(item) {
    return item * 2;
  });
  console.log("After map:", newArr);
}
mapExample([1, 2, 3]);
// Original Array: [ 1, 2, 3 ]
// After map: [ 2, 4, 6 ]

// filter()
function filterExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.filter(function(item) {
    return item > 3;
  });
  console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);
// Original Array: [ 1, 2, 3, 4, 5 ]
// After filter: [ 4, 5 ]


// find()
function findExample(arr) {
  console.log("Original Array:", arr);

  let found = arr.find(function(item) {
    return item > 3;
  });
  console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);
// Original Array: [ 1, 2, 3, 4, 5 ]
// After find: 4

// sort()
function sortExample(arr) {
  console.log("Original Array:", arr);

  arr.sort(function(a, b) {
    return a - b;
  });
  console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);
// Original Array: [ 5, 2, 3, 4, 1 ]
// After sort: [ 1, 2, 3, 4, 5 ]
