'use strict';

function deepEqual(a, b) {
  if (a === b)
    return true;

  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;

  var propsInA = 0, propsInB = 0;

  for (var prop in a) {
    propsInA ++;
    console.log (prop, propsInA);
  }

  for (var prop in b) {
    propsInB ++;
    if (!(prop in a) || !(deepEqual (a[prop], b[prop]))) {
      return false;
    }
  }

  return propsInA == propsInB;
};


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, {here: 1, object: 2}));
