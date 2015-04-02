function Panda (name, sex) {
    this.name = name;
    if (sex != 'male' && sex != 'female') {
        this.sex = 'female';
    }
    else {
        this.sex = sex;
    }
    this.weigth = 20;
}

Panda.prototype.weigth = function () {
    return this.weigth;
}

Panda.prototype.toString = function() {
    return [this.name, "is a", this.sex, "panda which weighs", this.weigth, "kg"].join(' ');
}

Panda.prototype.isMale = function() {
    if (this.sex == 'male') {
        return true;
    }
    else{
        return false;
    }
}

Panda.prototype.isFemale = function() {
    if (this.sex == 'female') {
        return true;
    }
    else {
        return false;
    }
}

Panda.prototype.eat = function(bamboo){
    this.weigth += bamboo / 2;
    if (this.weigth >= 80 && (this.weigth - bamboo / 2) < 80) {
        this.name = "Lazy Panda " + this.name;
    }
}

Panda.prototype.mate = function(otherPanda){
    var fatherName = "";
    var motherName = "";
    var babyName = "";
    var babeSex = "";
    if (this.isMale() && otherPanda.isFemale()) {
        fatherName = this.name;
        motherName = otherPanda.name;
    }
    else if (this.isFemale() && otherPanda.isMale()){
        fatherName = otherPanda.name;
        motherName = this.name;
    }
    else{
        console.log("Can't mate this 2 Pandas")
        return;
    }

    if (Math.random() < 0.5) {
        babeSex = 'male';
    }
    else {
        babeSex = 'female';
    }

    babyName = {
        'female': motherName + ' ' + fatherName,
        'male': fatherName + ' ' + motherName
    }[babeSex]

    return new Panda(babyName, babeSex)
}


var kokal = new Panda('Kokal', 'male')
var acheto = new Panda('Acheto', 'female')
var misho = new Panda('Misho', 'male')

kokal.eat(120);
console.log(kokal.weigth);

babe = kokal.mate(acheto);
console.log(babe.toString());
