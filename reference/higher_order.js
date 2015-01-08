'use strict';

function sq(argument) {
    console.log( argument * argument);
}


//foreach( [1, 2, 3], console.log);
var x = [1, 2, 3];
x.forEach(sq);
"sruthi".toUpperCase();


function filter(items, test) {
    var filtered = [];
    for (var i = 0, len = items.length; i < len; i++) {
       if (test(items[i])){
           filtered.push(items[i]);
       }
    }
    return filtered;
}

function even(x) { return x % 2 === 0 ;}
function odd(x) { return ! even(x); }

var even_nums = filter([1, 2, 3, 4, 5], even);
console.log( even_nums);
var odd_nums = filter( even_nums, odd);
console.log( odd_nums );


list.filter(male).filter(age_greater(50)).forEach(console.log)

[1, 2, 3, 4, 5, 6].filter(even)
    .filter(odd)
    .forEach(console.log);

