"use strict";

let can, holst, xx, yy, w, a, s, d, speed, xE, yE, kkk;

window.onload = function() {
    xE = 400;
    yE = 250;

    function drawEnemy() {
        holst.fillStyle = "#999999";
        holst.fillRect(xE, yE, 50, 50);
    }

    function controlHit() {
        kkk = Math.sqrt((xx - xE) * (xx - xE) + (yy - yE) * (yy - yE));
        if(kkk < 50) {
            xE = 5000;
        }
    }

    w = false;
    a = false;
    s = false;
    d = false;

    can = document.getElementById("can");
    holst = can.getContext("2d");

    function clearFon() {
        holst.clearRect(0, 0, 800, 600);
        holst.fillStyle = "#00FF00";
        holst.fillRect(0, 0, 800, 600);
    }

    clearFon();

    xx = 120;
    yy = 240;

    function drawHero() {
        holst.fillStyle = "#0000FF";
        holst.fillRect(xx, yy, 50, 50);
    }

    drawHero();

    window.onkeydown = function(k1) {
        console.log(k1.keyCode);
        if(k1.keyCode === 87) {
            w = true;
        }
        if(k1.keyCode === 65) {
            a = true;
        }
        if(k1.keyCode === 83) {
            s = true;
        }
        if(k1.keyCode === 68) {
            d = true;
        }
    }

    window.onkeyup = function(k2) {
        console.log(k2.keyCode);
        if(k2.keyCode === 87) {
            w = false;
        }
        if(k2.keyCode === 65) {
            a = false;
        }
        if(k2.keyCode === 83) {
            s = false;
        }
        if(k2.keyCode === 68) {
            d = false;
        }
    }

    speed = 5;

    function moveHero() {
        if(a === true) {
            xx = xx - speed;
        }
        if(d === true) {
            xx = xx + speed;
        }
        if(w === true) {
            yy = yy - speed;
        }
        if(s === true) {
            yy = yy + speed;
        }
    }

    setInterval(function() {
        clearFon();
        moveHero();
        drawHero();
        drawEnemy();
        controlHit();
    }, 50);
}


