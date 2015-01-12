'use strict';

var ancestry = [
{ "name" : "Sam", "age" : 25 },
{ "name" : "Tom", "age" : 40 },
{ "name" : "Ned", "age" : 35 }
]

function reduce (array, combine, start) {
  var current = start;

  for (var i = 0; i < array.length; i++) {
    current = combine (current, array[i]);
  }

  return current;

}

var array = [2, 4, 6];
console.log (array.reduce (function (a, b) {
    return a * b;
}, 1));

console . log ( ancestry . reduce ( function ( min , cur ) {
  if ( cur . age < min . age ) return cur ;
  else return min ;
}) ) ;
