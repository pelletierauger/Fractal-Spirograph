var r = 100;
var x, y;
var k = -4;
var angle = 0;
var looping = true;
var showGeometry = true;
var path = [];
var sun;
var end;

var sketch = new p5(function(p) {
    p.setup = function() {
        p.canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        p.canvas.addClass('one');
        p.background(50);
        p.frameRate(30);
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
            sketch.background(0);
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
            sketch.ellipse(end.x, end.y, 2, 2);
        }
    }
});
