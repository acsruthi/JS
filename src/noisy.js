
'use strict';

function noisy ( f ) {
  return function ( arg ) {
    console . log (" calling with ", arg ) ;
    var val = f ( arg ) ;
    console . log (" called with " , arg , "- got ", val );
    return val ;
  };
}
noisy ( Boolean ) (true) ;

function unless ( test , then ) {
  if (! test ) then () ;
}
function repeat ( times , body ) {
  for ( var i = 0; i < times ; i ++) {
      body (i);
  }

}

repeat (1 , function ( n ) {
  unless ( n % 2, function () {   //n%2==0
    console . log (n , " is even ") ;
  }) ;
}) ;
