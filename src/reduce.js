'use strict';

function reduce (array, combine, start) {
  var current = start;

  for (var i = 0; i < array.length; i++) {
    current = combine (current, array[i]);
  }

  return current;

}

console.log (reduce ([10,20,1,1], function (a, b) {
  return a * b;
}, 10));
