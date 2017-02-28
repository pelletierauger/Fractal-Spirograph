var r = 100;
var x, y;
var k = -4;
var angle = 0;
var looping = true;
var path = [];
var sun;
var end;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);
    // noLoop();
    noFill();
    stroke(255);
    x = width / 2;
    y = height / 2;
    sun = new Orbit(width / 2, height / 2, 200, 0, null);
    sun.addChild();

    var next = sun;
    for (var i = 0; i < 10; i++) {
        next = next.addChild();
    }
    end = next;
}

function draw() {
    background(51);


    var current = sun;
    while (current) {
        current.update();
        current.show();
        current = current.child;
    }



    // sun.show();
    // ellipse(x, y, r * 2, r * 2);
    // // var angle = 0;
    // var r2 = r * 0.5;
    // var rsum = r + r2;
    // var x2 = x + rsum * cos(angle);
    // var y2 = y + rsum * sin(angle);
    path.push(createVector(end.x, end.y));
    // ellipse(x2, y2, r2 * 2, r2 * 2);
    // angle += 0.1;
    stroke(255, 0, 0);
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
