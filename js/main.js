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
  {
    answers: 't'
  }
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
  var promptAsk = prompt ("nl or sl or r or b or m or i or a or t");
  globalAskVariable = promptAsk;
}

function firstMethod() {
  var gsk = globalAskVariable.toLowerCase();
  if (globalAskVariable == "nl") {
    var canvas = document.getElementById ("canvasId");
    var ctx = canvas.getContext ("2d");
    ctx.strokeText(String (typeFeaturesList[2].type), 10, 10);
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
  if (globalAskVariable == String (typeAnswers [5].answers)) {
    try {
      createSimpleAnimations ();
    } catch (e) {
      console.log(e.name);
    }
  }
  if (globalAskVariable == String (typeAnswers [6].answers)) {
    try {
      createSimpleAnimationByInterval ();
    }
    catch (e) {
      console.log (e.stack);
    }
  }
  //for debugging gsk == t
  if (gsk == typeAnswers[7].answers) {
    try {
      drawImageNewFunction();
    }
    catch (e) {
      console.log ("error translate" + e.stack);
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
  var imageSource = new Image();
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
//transorm some objects
// function transormSomeObjects() {
//   var canvas = document.getElementById ('canvasId');
//   var ctx = canvas.getContext ('2d');
//   imageSource = new Image();
//
//   imageSource.onload = goLoadFunction ();
//   function goLoadFunction() {
//     try {
//       ctx.save ();
//       ctx.translate (40, -10);
//       ctx.rotate (30 * Math.PI / 180);
//       ctx.scale (0.3, 0.3);
//       ctx.drawImage (imageSource, 0, 0);
//       ctx.restore ();
//     }
//     catch (e) {
//       console.log (e.stack);
//     }
//     // try {
//     //   ctx.save ();
//     //   ctx.rotate (-30 * Math.PI / 180);
//     //   ctx.translate (100, 100);
//     //   ctx.scale (0.4, 0.4);
//     //   ctx.drawImage (imageSource, 0, 0);
//     //   ctx.restore ();
//     // }
//     // catch (e) {
//     //   console.log (e.stack);
//     // }
//   };
//   imageSource  = "assets/carrot1.png";
//   console.log (getAllMethods(imageSource));
// };

function drawImageNewFunction () {
  var canvas = document.getElementById ("canvasId");
  var ctx = canvas.getContext ("2d");
  var image = new Image ();
  image.onload = function () {
    ctx.save ();
    ctx.rotate (-30 * Math.PI / 180);
    ctx.scale (0.4, 0.4);
    ctx.drawImage (image, 0, 0, 50, 50);
    ctx.restore ();
    ctx.save ();
    ctx.rotate (30 * Math.PI / 180);
    ctx.scale (0.5, 0.5);
    ctx.drawImage (image, 0, 0, 50, 50);
    ctx.restore ();
  }
  image.src = 'assets/carrot1.png';
}
//------------------------------------------------------------
//show all methods of objects
function getAllMethods(obj)
{
    return Object.getOwnPropertyNames(obj).filter(function(prop) {
            return typeof obj[prop] == 'function';
        });
};
//create a home with window, roof and door
function createHome () {
  var canvas = document.getElementById ("canvasId");
  var ctx = canvas.getContext ("2d");
  //create roof
  ctx.beginPath();
  ctx.moveTo(100, 110); // pick up "pen," reposition
  ctx.lineTo(400, 110); // draw straight across to right
  ctx.lineTo(250, 10); // draw down toward left
  ctx.closePath(); // connect end to start
  ctx.fillStyle = "blue";
  // ctx.strokeStyle = "blue";
  ctx.fill();
  // ctx.stroke(); // outline the shape that's been described
  //create house rectangle
  ctx.beginPath ();
  ctx.rect (110, 110, 280, 200);
  ctx.closePath ();
  // ctx.strokeStyle ="orange";
  ctx.fillStyle = "orange";
  ctx.fill ();
  // ctx.stroke ();
  //create door rectangle
  ctx.beginPath ();
  ctx.rect (280, 150, 70, 161);
  ctx.closePath ();
  ctx.fillStyle = "yellow";
  // ctx.strokeStyle ="yellow";
  ctx.fill();
  // ctx.stroke ();
  //create window
  ctx.beginPath ();
  ctx.rect (150, 150, 80, 70);
  ctx.closePath ();
  ctx.fillStyle = "blue";
  // ctx.strokeStyle ="blue";
  ctx.fill();
  // ctx.stroke ();
}
//------------------------------------------------------------
//ths input point
function main() {
  // askTypeFeatures();
  // firstMethod();
  createHome ();
}

main();
