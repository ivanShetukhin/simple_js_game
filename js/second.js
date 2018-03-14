function addImage() {
    var imageFromList = document.getElementById("zero");
    if (imageFromList != null) {
        imageFromList.onclick = showOtherImage;
    }
}

function showOtherImage() {
    var imageFromList = document.getElementById("zero");
    if (imageFromList !== null) {
        imageFromList.src = "assets/chicken.png";
    }
}

//the input point function
function main() {
    addImage();
}
//the input point
main();