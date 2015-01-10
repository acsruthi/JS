'use strict';

function filter(array,action) {
    var filtered=[];

    for (var i = 0; i < array.length; i++) {
      if(action(array[i])) {
        filtered.push(array[i]);
      }
    //  console.log (array[i]);
    }
  console.log (filtered);
}

function even(x) {
      return x % 2 === 0;
      }

function odd(x) {
    return ! even(x);
}




filter([1,2,3,4],odd);
