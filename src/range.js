'use strict';

function range( start, end, step) {

   if (step == null)
     step = 1;
     var array = [];

  if (step > 0) {
     for (var i = start; i <= end; i += step) {
         array.push (i);
     }
   }

  else {
        for (var i = start; i >= end; i += step)
        {
             array.push (i);
        }
      }

   return array;
};


function sum (array) {
   var sum = 0;
   for (var i = 0; i < array.length; i++)
      sum += array[i];
  console.log (sum);

};

console.log (range (0,2));
sum (range (1,10));
