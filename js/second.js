function addImage() {
    // var imageFromList = document.getElementById("zero");
    // if (imageFromList != null) {
    //     imageFromList.onclick = showOtherImage;
    // }
    var elementA = document.getElementsByTagName("img");
    for (var i = 0; i < elementA.length; i++) {
        elementA[i].onclick = showOtherImage;
    }
}

function showOtherImage(objEvent) {
    var elementA = objEvent.target;
    var name = elementA.id;
    name = "assets/" +name + ".png";
    elementA.src = name;
}

//the input point function
function main() {
    addImage();
}
//the input point
main();