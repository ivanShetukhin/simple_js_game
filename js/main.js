var globalAskVariable = "";

// function askValue ()
// {
//     var promptAsk = prompt ("yes or no?");
//     globalAskVariable = promptAsk;
// }

var typeFeaturesList = [{
    type: "rectangle"
  },
  {
    type: "straight line"
  },
  {
    type: "inclined line"
  },
  {
    type: "broken line"
  },
  {
    type: "image"
  },
];

var typeAnswers = [{
    answers: 'nl'
  },
  {
    answers: 'sl'
  },
  {
    answers: 'r'
  },
  {
    answers: 'b'
  },
  {
    answers: 'm'
  },
  {
    answers: 'i'
  },
  {
    answers: 'a'
  },
];

var sizeTextLine = [{
  size_one: 10
}, ];

//get simple canvas without ctx
function getSimpleCanvas (){
  var canvas = document.getElementById ('canvasId');
  return canvas;
}
function askTypeFeatures() {
  var promptAsk = prompt("nl or sl or r or b or m or i or a");
  globalAskVariable = promptAsk;
}

function firstMethod() {
  if (globalAskVariable == "nl") {
    var canvas = document.getElementById("canvasId");
    var ctx = canvas.getContext("2d");
    ctx.strokeText(String(typeFeaturesList[2].type), 10, 10);
    ctx.moveTo(50, 70);
    ctx.lineTo(100, 50);
    ctx.stroke();
  }
  if (globalAskVariable == "sl") {
    secondMethod();
  }
  if (globalAskVariable == "r") {
    drawRectangle();
  }
  if (globalAskVariable == 'b') {
    drawBrokenLine();
  }
  if (globalAskVariable == 'm') {
    try {
      drawManyRectangle(20, 30, 'brawn');
      drawManyRectangle(30, 60, 'blue');
      drawManyRectangle(40, 90, 'red');
    } catch (e) {
      console.log(e.name);
    }
  }
  if (globalAskVariable == String(typeAnswers[5].answers)) {
    try {
      createSimpleAnimations();
    } catch (e) {
      console.log(e.name);
    }
  }
  if (globalAskVariable == String (typeAnswers[6].answers)) {
    try {
      createSimpleAnimationByInterval ();
    }
    catch (e) {
      console.log (e.stack);
    }
  }
}

function secondMethod() {
  var canvas = document.getElementById("canvasId");
  var ctx = canvas.getContext("2d");
  ctx.strokeText(String(typeFeaturesList[1].type), 10, 10);
  ctx.moveTo(10, 10);
  ctx.lineTo(10, 50);
  ctx.stroke();
}
//draw broken line
function drawBrokenLine() {
  var canvas = document.getElementById("canvasId");
  var ctx = canvas.getContext("2d");
  try {
    ctx.strokeText(String(typeFeaturesList[3].type), 10, 10);
  } catch (e) {
    console.log(e);
  }
  ctx.stroke();
  ctx.lineWidth = 10;
  ctx.strokeStyle = "blue";
  var x = [40, 70, 100, 130, 160, 190];
  var y = [40, 80, 40, 80, 40, 80];
  ctx.moveTo(10, 80);
  ctx.beginPath();
  for (var i = 0; i < x.length; i++) {
    ctx.lineTo(x[i], y[i]);
  }
  ctx.stroke();
}
//--------------------------------------------------------
//--------------------------------------------------------
function getCanvasMethod() {
  var canvas = document.getElementById("canvasId");
  var ctx = canvas.getContext("2d");
  return ctx;
}

function drawManyRectangle(side, x, color) {
  var ctx = getCanvasMethod();
  ctx.strokeStyle = color;
  ctx.strokeRect(x, 10, side, side);
  ctx.stroke();
}

//----------------------------------------------------------
//----------------------------------------------------------
//draw rectangle by canvas
function drawRectangle() {
  var objectSize = {
    a: 10,
    b: 30,
    c: 80,
    d: 40
  };
  var canvas = document.getElementById("canvasId");
  var ctx = canvas.getContext("2d");
  canvas.width = 200;
  canvas.height = 100;
  ctx.strokeText(String(typeFeaturesList[0].type), objectSize.a, objectSize.a);
  ctx.strokeStyle = "green";
  ctx.fillStyle = "blue";
  ctx.shadowBlur = objectSize.a;
  ctx.shadowColor = "brown";
  ctx.rect(objectSize);
  ctx.fill();
  ctx.stroke();
}

//loading a simple image
function createSimpleAnimations() {
  var ctx = getCanvasMethod();
  var imageSource = new Image();
  imageSource.onload = function() {
    ctx.drawImage(imageSource, 10, 10, 80, 80);
  }
  imageSource.src = "assets/carrot1.png";
}
//create simple animation by intervar
function createSimpleAnimationByInterval() {
  var ctx = getCanvasMethod();                    //get ctx
  var canvas = getSimpleCanvas();
  var imageSource = new Image ();
  imageSource.onload = function () {
    setInterval (move, 100);
    console.log (move());
  }
  imageSource.src = "assets/carrot1.png";
  var x = 10;
  function move () {
    if (x < 500) {
      x += 5;
    }
    else {
      x = 10;
    }
    ctx.clearRect (0, 0, canvas.width, canvas.height);
    ctx.drawImage (imageSource, x, 10, 50, 50);
    return x;
  }
}
//------------------------------------------------------------
//ths input point
function main() {
  askTypeFeatures();
  firstMethod();
}

main();
