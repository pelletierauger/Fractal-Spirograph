var Orbit = function(x, y, r, n, p) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.angle = 0;
    this.n = n;
    this.speed = radians(pow(k, n - 1)) / 10;
    this.parent = p || null;
    this.child = null;
};

Orbit.prototype.show = function() {
    stroke(255);
    strokeWeight(1);
    noFill();
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
};

Orbit.prototype.addChild = function() {
    var newRadius = this.r / 3;
    var newX = this.x + this.r + newRadius;
    var newY = this.y;
    this.child = new Orbit(newX, newY, newRadius, this.n + 1, this);
    return this.child;
};

Orbit.prototype.update = function() {
    if (this.parent) {
        this.angle += this.speed;
        var rsum = this.r + this.parent.r;
        this.x = this.parent.x + rsum * cos(this.angle);
        this.y = this.parent.y + rsum * sin(this.angle);
    }
};
