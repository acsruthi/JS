'use strict';

function deepEqual(a, b) {
    if (typeof(a) === typeof(b) && a.length === b.length) {
        var i = 0;
        while (i < a.length) {
            if (a[i] === b[i]) {
                i++;
            } else {
                return false;
            }
        }
        return true;
    }
    return false;
}

console.log(deepEqual("123",123));
