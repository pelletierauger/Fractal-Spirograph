var r = 100;
var x, y;
var k = -7;
var angle = 0;
var looping = true;
var showGeometry = true;
var path = [];
var sun;
var end;
var prev;
var decrement = 5;

var sketch = new p5(function(p) {
    p.setup = function() {
        p.canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        p.canvas.addClass('one');
        p.background(50);
        p.frameRate(30);
        // p.noStroke();
        p.noFill();
        // p.stroke(255, 150);
        // p.strokeWeight(0.5);
        p.noStroke();
    }
    p.draw = function() {}
    p.keyPressed = function() {
        if (p.keyCode === 32) {
            if (looping) {
                p.noLoop();
                geometry.noLoop();
                looping = false;
            } else {
                p.loop();
                geometry.loop();
                looping = true;
            }
        }
        if (p.key == 'g' || p.key == 'G') {
            if (showGeometry) {
                showGeometry = false;
                geometry.canvas.style("display", "none");
            } else {
                showGeometry = true;
                geometry.canvas.style("display", "block");
            }
        }
        if (p.key == 'q' || p.key == 'Q') {
            sketch.background(51);
        }
        if (p.key == 'w' || p.key == 'W') {
            var current = sun;
            decrement -= 0.1;
            k -= 0.1;
            while (current) {
                // current.update();
                // current.show();
                if (current.parent) {
                    current.r = current.parent.r / decrement;;
                }
                current = current.child;

            }
        }
    }
});

var geometry = new p5(function(p) {
    p.setup = function() {
        p.canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        p.canvas.addClass('two');
        p.frameRate(30);
        sun = new Orbit(p.width / 2, p.height / 2, 200, 0, null);
        sun.addChild();
        var next = sun;
        for (var i = 0; i < 10; i++) {
            next = next.addChild();
        }
        end = next;
        p.stroke(255);
        p.strokeWeight(1);
        p.noFill();
    }
    p.draw = function() {
        for (var i = 0; i < 20; i++) {
            p.clear();
            var current = sun;
            while (current) {
                current.update();
                current.show();
                current = current.child;
            }
            // if (prev) {
            //     sketch.line(end.x, end.y, prev.x, prev.y);
            // }
            for (var ii = 0; ii < 10; ii++) {
                var mapSize = p.map(ii, 0, 10, 10, 0.01);
                var mapAlpha = p.map(ii, 0, 10, 0, 255);
                sketch.fill(155, p.map(k, -7, -11, 255, 0), 50, mapAlpha / 10);
                sketch.ellipse(end.x, end.y, mapSize, mapSize);
                prev = p.createVector(end.x, end.y);
            }

            var current = sun;
            decrement -= 0.0001;
            k -= 0.0001;
            while (current) {
                // current.update();
                // current.show();
                if (current.parent) {
                    current.r = current.parent.r / decrement;;
                }
                current = current.child;

            }
        }
    }
});
