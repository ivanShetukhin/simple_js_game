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



//INPUT POINT____________________

function main() {
    // makeCounterOne();
    makeNewObject();
}

window.onload = main;