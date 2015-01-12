'use strict';

 function filter(array,action) {
    var filtered = [];

    for (var i = 0; i < array.length; i++) {
      if (action(array[i])) {
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

function sum(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++)
      total += array[i];
    console.log (total);

}


//filter([1,2,3,4],even);
//sum([1,2,3]);


var ancestry = [
  { "name" : "Sam", "age" : 25 },
  { "name" : "Tom", "age" : 40 }
]

 console.log (filter (ancestry, function (person) {
    return person.age < 50;
 }));
