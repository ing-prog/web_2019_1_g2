"use strict";

let t1, t2, b1, a, b, s, res, ttt, n, timer;

window.onload = function() {
    t1 = document.getElementById("t1");
    t2 = document.getElementById("t2");
    b1 = document.getElementById("b1");
    res = document.getElementById("res");
    ttt = document.getElementById("ttt");

    b1.onclick = function() {
        a = parseInt(t1.value);
        b = parseInt(t2.value);
        s = a + b;
        res.innerHTML = "Сумма: " + s;
    };

    n = 0;

    timer = setInterval(function() {
        n = n + 1;
        ttt.innerHTML = n;
    }, 1000);
};
