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
function createHome (sclx, scly, trsx, trsy) {
  var canvas = document.getElementById ("canvasId");
  var ctx = canvas.getContext ("2d");
  ctx.save ();
  ctx.scale (sclx, scly);
  ctx.translate (trsx, trsy);
  //create roof
  ctx.beginPath();
  ctx.moveTo(100, 110); // pick up "pen," reposition
  ctx.lineTo(400, 110); // draw straight across to right
  ctx.lineTo(250, 10); // draw down toward left
  ctx.closePath(); // connect end to start
  // ctx.scale (scaleValueX, scaleValueY);
  ctx.fillStyle = "blue";
  // ctx.strokeStyle = "blue";
  ctx.fill();
  // ctx.stroke(); // outline the shape that's been described
  //create house rectangle
  ctx.beginPath ();
  ctx.rect (110, 110, 280, 200);
  ctx.closePath ();
  // ctx.scale (scaleValueX, scaleValueY);
  // ctx.strokeStyle ="orange";
  ctx.fillStyle = "orange";
  ctx.fill ();
  // ctx.stroke ();
  //create door rectangle
  ctx.beginPath ();
  ctx.rect (280, 150, 70, 160);
  ctx.closePath ();
  // ctx.scale (scaleValueX, scaleValueY);
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
  ctx.restore ();
}
//create unend animation
function unendAnimation () {
  var canvas = getSimpleCanvas();
  var ctx = getCanvasMethod();
  var image = new Image ();
  var x = 10;
  var y = 10;
  function move () {
    var message  = "here";
    if (x < 200) {
      if (y ==10 ) {
        x += 10;
        y = 10;
      }
    }
    if (x == 200)
    {
      if (y < 200) {
        x = 200;
        y += 10;
      }
    }
    if (y == 200) {
      if (x > 10) {
        console.log (message);
        x -= 10;
      }
    }
    if (x == 10) {
      console.log (x, y);
      if (x < 200 )
      {
        y -= 10;
      }
    }
    ctx.clearRect (0, 0, canvas.width, canvas.height);
    ctx.drawImage (image, x, y, 80, 80);
  }
  image.onload = function () {
    setInterval (move, 100);
  }
  image.src = "assets/carrot1.png";
}
//work with tiled map
function tiledMapMethod () {
  // var mapManager = {
  //   mapData: null,
  //   tLayer: null;
  //   xCount: 0,
  //   yCount: 0,
  //   tSize: {x: 32, y: 32};
  //   mapSize: {x: 50, y: 50};
  //   tilesets: new Array ();
  // };
}
//set timeout for message
function setTimeMethod () {
  setTimeout (wakeUpMessage, 100000);
}

function wakeUpMessage () {
  document.write ("wake up!");
}

function writeMethod (msg) {
  try {
    // var msgid = document.getElementById ("messageId");
    // messageId.innerHTML = msg;
    document.write (msg);
  }
  catch (e) {
    console.log (e.stack);
  }
}

function happyMethod () {
  var i = 0;
  var msg = {
    a: "happy birthday to you! <br>",
    b: "happy birthday dear John"
  }
  while (i < 2) {
    writeMethod(msg.a);
    i = i + 1;
  }
  writeMethod(msg.b);
}
//battleship game
function battleshipPlay () {
  var lct1 = Math.floor(Math.random() * 5);
  var lct2 = lct1 + 1;
  var lct3 = lct2 + 1;
  var sunk = false;
  var gses =  0;
  var hit = 0;
  var gs = 0;
  var maxd = 6;

  while (sunk == false) {
    gs = prompt ("input fire");
    if (gs < 0 || gs > maxd) {
      alert ("your number is wrong!");
    }
    else {
      gses = gses + 1;
      console.log (gses);
      if (gs == lct1) {
        alert ("hit");
        hit = hit + 1;
        if (hit == 3) {
          sunk = true;
          alert ("is sunk");
        }
      }
      else if (gs == lct2) {
        alert ("hit");
        hit = hit + 1;
        if (hit == 3) {
          sunk = true;
          alert ("is sunk");
        }
      }
      else if (gs == lct3) {
        alert ("hit");
        hit = hit + 1;
        if (hit == 3) {
          sunk = true;
          alert ("is sunk");
        }
      }
      else {
        alert ("miss");
      }

    }
  }
  alert ("you kill ship from " + gses + " accuracy");
}
//
function learnArraysMethod () {
  var arv = [1, 2, 3, 4, 5, 6, 7];
  for (var i = 0; i < arv.length; i ++) {
    document.write (arv[i] + "<br>");
  }
};

function makeObjectMethod () {
  var svs = "black";

  var fobj = {
    name: "ford",
    size: 12,
    color: "black"
  };

  fobj.owner = "sly Jonny";

  if (svs == fobj.color) {
    document.write (fobj.name + " your choice" + "<br>");
    document.write (fobj.owner);
  }
  delete fobj.owner;
  document.write ("<br>" + fobj.owner);
}

function detectCarOld () {
  var car1 = {
    name: "ford",
    mileage: 1232,
    color: "yellow",
    passengers: 4
  };
  var lookCar = detectNormal(car1);

  if (lookCar) {
    document.write ("good mobile ");
  }
  else {
    document.write ("bad mobile");
  }
}

function detectNormal (car) {
  if (car.mileage > 10000) {
    document.write ("bad mobile because milleage very large");
    return false;
  }
  else if (car.passengers < 4) {
    document.write ("small mobile <br>");
    return false;
  }
  return true;
}
//------------------------------------------------------------
//ths input point
function main() {
  var choiceProgramm = 7;

  if (choiceProgramm == 1) {
      unendAnimation();
  }
  else if (choiceProgramm == 2) {
    setTimeMethod ();
  }
  else if (choiceProgramm == 3) {
    happyMethod();
  }
  else if (choiceProgramm == 4) {
    battleshipPlay ();
  }
  else if (choiceProgramm == 5) {
    learnArraysMethod ();
  }
  else if (choiceProgramm == 6) {
    makeObjectMethod ();
  }
  else if (choiceProgramm == 7) {
    detectCarOld();
  }
  // askTypeFeatures();
  // firstMethod();
  // createHome (1, 1, 10, 130);
  // createHome (0.5, 0.5, -40, 0);
  // createHome (2, 2, 100, 0);

}

main();
