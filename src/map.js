'use strict';

var ancestry = [
{ "name" : "Sam", "age" : 25 },
{ "name" : "Tom", "age" : 40 },
{ "name" : "Ned", "age" : 35 }
]

function map (array, transform) {
    var mapped = [];

    for (var i = 0; i < array.length; i++) {
        mapped.push (transform(array[i]));
    }
    return mapped;
}

var overThirty = ancestry.filter(function(person) {
    return person.age > 30;
});

console.log (map (overThirty, function(person) {
    return person.name;
}))
