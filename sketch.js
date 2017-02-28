var r = 100;
var x, y;
var angle = 0;
var looping = true;
var path = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);
    // noLoop();
    noFill();
    stroke(255);
    x = width / 2;
    y = height / 2;
}

function draw() {
    background(51, 15);
    ellipse(x, y, r * 2, r * 2);
    // var angle = 0;
    var r2 = r * 0.5;
    var rsum = r + r2;
    var x2 = x + rsum * cos(angle);
    var y2 = y + rsum * sin(angle);
    path.push(createVector(x2, y2));
    ellipse(x2, y2, r2 * 2, r2 * 2);
    angle += 0.1;

    beginShape();
    for (var i = 0; i < path.length; i++) {
        vertex(path[i].x, path[i].y);
    }
    endShape();
}


function keyPressed() {
    if (keyCode === 32) {
        if (looping) {
            noLoop();
            looping = false;
        } else {
            loop();
            looping = true;
        }
    }
}
