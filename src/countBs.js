'use strict';

// worker
function countChar(text, ch) {
    var count = 0;
    for (var i = 0; i < text.length; i++) {
        if (text.charAt(i) === ch) {
          count++;
        }
    }
    return count;
}

// data
var text = 'Hello how are you?';
var what = 'e';

// call worker
var count = countChar(text, what);

// print
console.log('Found "%s" %d times in "%s"', what, count, text);
