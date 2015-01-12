'use strict';

var array = [[1,2,3],[4,5]];

console.log (array.reduce(function(flat,current) {
    return flat.concat(current);
}, []));
