"use strict";

let can, holst, xx, yy, speed, pause, btn;

window.onload = function() {
    btn = document.getElementById("btn");
    can = document.getElementById("can");

    holst = can.getContext("2d");

    function clearHolst() {
        holst.clearRect(0, 0, 800, 600);
        holst.fillStyle = '#00FF00';
        holst.fillRect(0, 0, 800, 600);
    }

    xx = 100;
    yy = 250;

    speed = 4;

    pause = false;

    btn.onclick = function() {
        if(pause === false) {
            pause = true;
        } else {
            pause = false;
        }
    }

    function drawCube() {
        holst.fillStyle = '#0000FF';
        holst.fillRect(xx, yy, 50, 50);
    }

    function moveCube() {
        xx = xx + speed;

        if(xx + 50 > 800) {
            speed = speed * (-1);
        }

        if(xx < 0) {
            speed = speed * (-1);
        }
    }

    clearHolst();
    drawCube();

    setInterval(function() {
        if(pause === false) {
            clearHolst();
            moveCube();
            drawCube();
        }
    }, 50);
}
