"use strict";

let x, a, ost;

x = 25;

a = 2;

while(a < x) {
    ost = x % a;
    if(ost === 0) {
        console.log("NO SIMPLE");
        break;
    } else {
        a = a + 1;
    }
}

if(a >= x) {
    console.log("SIMPLE");
}
