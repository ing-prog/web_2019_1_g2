"use strict";

let x, a, ost;

x = 16;

a = 2;

while(a < x) {
    ost = x % a;
    if(ost === 0) {
        console.log(0);
        break;
    } else {
        a = a + 1;
    }
}

console.log(1);
