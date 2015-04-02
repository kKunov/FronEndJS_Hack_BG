function MutablePoint(x, y, z) {
    this.getX = function() {
        return x;
    }

    this.getY = function() {
        return y;
    }

    this.getZ = function() {
        return z;
    }

    this.move = function(dx, dy, dz) {
        x += dx;
        y += dy;
        z += dz;
    }
}

MutablePoint.prototype.toString = function() {
    return '(' + this.getX() + ', ' + this.getY() + ', ' + this.getZ() + ')'
}

var p1 = new MutablePoint(0, 0, 0);

p1.move(0, 0, 1);

console.log(p1.getX() == 0);
console.log(p1.getY() == 0);
console.log(p1.getZ() == 1);

console.log(p1.toString() == "(0, 0, 1)")

function ImmutablePoint(x, y, z) {
        this.getX = function() {
        return x;
    }

    this.getY = function() {
        return y;
    }

    this.getZ = function() {
        return z;
    }
}

ImmutablePoint.prototype.move = function(dx, dy, dz){
    return new ImmutablePoint(this.getX() + dx, this.getY() + dy, this.getZ() + dz)
}

ImmutablePoint.prototype.toString = function() {
    return '(' + this.getX() + ', ' + this.getY() + ', ' + this.getZ() + ')'
}

var p2 = new ImmutablePoint(0, 0, 0)

var result = p2.move(0, 0, 1);

console.log(p2.getX() == 0);
console.log(p2.getY() == 0);
console.log(p2.getZ() == 0);

console.log(p2.toString() == "(0, 0, 0)")
console.log(result.toString() == "(0, 0, 1)")
