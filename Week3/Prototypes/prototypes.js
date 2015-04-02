String.prototype.capitalize = function(){
    return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.isBlank = function() {
    for (var i = 0; i < this.length; i++) {
        if(this[i] != ' '){
            return false;
        }
    }

    return true;
}

String.prototype.words = function() {
    var newString = '';
    for (var i = 0; i < this.length; i++) {
        if (!(this[i] === ' ' && this[i - 1] === ' ')) {
            newString += this[i];
        }
    }

    return newString.split(' ');
}

String.prototype.format = function(dict) {
  var result = this;

  if(typeof(dict) === "object") {
    Object.keys(dict).forEach(function(key) {
      result = result.replace("{" + key + "}", dict[key]);
    });
    return result;
  }

  var args = [];
  var n = arguments.length;
  var i = 0;

  for(i; i < n; i+=1) {
    args.push(arguments[i]);
  }

  var result = this;

  args.forEach(function(arg) {
    result = result.replace("{}", arg);
  });

  return result;
}

Array.prototype.head = function() {
    return this[0];
}

Array.prototype.tail = function() {
    return this.slice(1)
}

Array.prototype.last = function() {
    return this.slice(this.length - 1)
}

Array.prototype.range = function(start, end){
    var n = end - start

    for (var i = 0; i <= n; i++) {
        this.push(start + i)
    }

    return this
}

Array.prototype.sum = function() {
    var sumOfArray = 0;

    for (var i = 0; i < this.length; i++) {
        sumOfArray += this[i];
    }

    return sumOfArray;
}

Array.prototype.product2 = function() {
    var productArr = 1;

    for (var i = 0; i < this.length; i++) {
        productArr *= this[i];
    }

    return productArr;
}

Array.prototype.compact2 = function() {
    var i = 0;

    while (i < this.length) {
        for (i = 0; i < this.length; i++) {
            if (this[i] === false || this[i] === 0 || this[i] === null ||
            this[i] === "" || this[i] === undefined || (isNaN(this[i]) && typeof(this[i]) != 'string')) {
                this.splice(i, 1);
                break;
            }
        }
    }

    return this;
}

Array.prototype.take = function(n) {
    arr = [];

    for (i = 0; i < n && i < this.length; i++) {
        arr.push(this[i]);
    }

    return arr;
}

Array.prototype.drop = function(n) {
    arr = [];

    for (i = n; i < this.length; i++) {
        arr.push(this[i]);
    }

    return arr;
}

Array.prototype.dedup = function() {
    arr = []
    values = {}

    for(var i = 0; i < this.length; i++){
        if(values[this[i]] !== true) {
            values[this[i]] = true;
            arr.push(this[i]);
        }
    }

    return arr;
}

Array.prototype.sample = function() {
    return this[Math.floor(Math.random()*this.length)];
}


var a = [].range(1, 10)

/*console.log('are de'.capitalize())
console.log('   '.isBlank())
console.log(''.isBlank())
console.log('   a      '.isBlank())
console.log('are de man was   sad'.words())
console.log([1, 2, 3].head())
console.log([1, 2, 3].tail())
console.log([1, 2, 3].last())
console.log([].range(1, 10))
console.log([1,2,3,4].sum())
console.log([1,2,3,4].product2())
console.log([false, true, 0, "", null, 5, undefined, NaN, "JavaScript"].compact2())
console.log(a.take(3))
console.log(a.take(13))
console.log(a.drop(5))
console.log(a.drop(14))
console.log([1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3].dedup())
console.log([1, 2, 3].sample())
*/
