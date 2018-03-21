function makeCounter() {
    var count = 0;

    function counterOne () {
        count = count + 1;
        return count;
    }
    return counterOne;
}

function makeCounterOne() {
    var count = makeCounter();
    wrD(count());
    wrD(count());
    wrD(count());
    wrD(count());
    wrD(count());
}

function wrD(text) {
    document.write(text);
}

//INPUT POINT____________________

function main() {
    makeCounterOne();
}

window.onload = main;