function makeCounter() {
    var count = 0;

    function counterOne () {
        count = count + 1;
        return count;
    }
    return counterOne;
}

function wrD(text) {
    // document.write(text);
    function innerEachCall (text) {
        var inputP = document.getElementById("content");
        return inputP.innerHTML = "<p>" + text + "</p>";
    }
    return innerEachCall;
}

function makeCounterOne() {
    var count = makeCounter();
    var wrd = wrD();
    wrd(count());

}

//constructor
function Dog(name, weight) {
    this.name = name;
    this.weight = weight;
}

function makeNewObject() {
    var t1 = new Dog("tomm", 21);
    var t2 = new Dog("john", 14);
    var t3 = new Dog("karl", 4);
    var dogs = [t1, t2, t3];
    for (var i = 0; i < dogs.length; i ++) {
        if (dogs[i].weight < 10) {
            document.write("small dog is " + dogs[i].name + "<br>");
        }
        else {
            document.write("big dog is " + dogs[i].name + "<br>");
        }
    }
}

function Car(name, color, year) {
    this.name = name;
    this.color = color;
    this.started = false;
    this.drive = false;
    this.stop = false;

    this.start = function() {
        this.started = true;
        console.log("ready to drive");
    };

    this.drive = function() {
        this.drive = true;
        if (this.start) {
            console.log("to drive");
        }
    };

    this.stop = function() {
        this.stop = true;
        if (this.start && this.drive) {
            console.log ("to stop");
        }
    };
}

function makeCar() {
    var fiat = new Car("fiat", "yellow", 1980);
    fiat.start();
    fiat.drive();
    fiat.stop();
}



var raven = {
    name: "raven",
    weight: 250,
    text: "cgar - cgcar"
};

function makeBirds() {
    var ravenI = new Bird(raven);
    ravenI.say();
}

function Bird(params) {
    this.name = params.name;
    this.weight = params.weight;
    this.text = params.text;

    this.say = function() {
        if(this.name != null) {
            console.log(this.text);
        }
    };
}

function Dog(name, weight, height) {
  this.name = name;
  this.weight = weight;
  this.height = height;
}



//INPUT POINT____________________

function main() {
    // makeCounterOne();
    //makeNewObject();
    //makeCar();
    makeBirds();
}

window.onload = main;
