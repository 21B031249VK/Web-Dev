if (-1 || 0) alert( 'first' ); // will execute, result = -1
if (-1 && 0) alert( 'second' ); // will not execute, result = 0
if (null || -1 && 1) alert( 'third' ); //will execute, result = 1