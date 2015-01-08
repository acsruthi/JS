'use strict';
function reverseArray (array) {

   var newArray = [];

   for (var i = array.length; i > 0; i--) {
          newArray.push (i);
      }
      return newArray;
};

console.log (reverseArray ([1,2,3,4]));
