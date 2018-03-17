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
    setTimeout(reBlur, 2000, elementA);
}

function reBlur(elementA) {
    var name = elementA.id;
    name = "assets/" +name + "_blur" + ".png";
    elementA.src = name; 
}

function hideRules() {
    var element = document.getElementById("rules");
    element.onclick = hideText;
}
  
function hideText()
{
    var element = document.getElementById("rules");
    element.style.display = 'none';
 }

//the input point function
function main() {
    addImage();
    hideRules();
}
//the input point
main();