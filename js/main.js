var globalAskVariable = "";

// function askValue ()
// {
//     var promptAsk = prompt ("yes or no?");
//     globalAskVariable = promptAsk;
// }

var typeFeaturesList = 
[
    {type: "rectangle"},
    {type: "straight line"},
    {type: "inclined line"},
    {type: "broken line"},
];

var sizeTextLine = 
[
    {size_one: 10},
]

function askTypeFeatures ()
{
    var promptAsk = prompt ("nl or sl or r or b or m");
    globalAskVariable = promptAsk;
}

function firstMethod () {
    if (globalAskVariable == "nl")
    {
        var canvas = document.getElementById ("canvasId");
        var ctx = canvas.getContext("2d");
        ctx.strokeText(String(typeFeaturesList[2].type), 10, 10);
        ctx.moveTo (50, 70);
        ctx.lineTo (100, 50);
        ctx.stroke ();
    }
    if (globalAskVariable == "sl")
    {
        secondMethod ();
    }
    if (globalAskVariable == "r")
    {
        drawRectangle ();
    }
    if (globalAskVariable == 'b')
    {
        drawBrokenLine ();
    }
    if (globalAskVariable == 'm')
    {
        try {
            drawManyRectangle (20, 30, 'brawn');
            drawManyRectangle (30, 60, 'blue');
            drawManyRectangle (40, 90, 'red');
        }
        catch (e) {
            console.log (e);
        }
    }
}

function secondMethod ()
{
    var canvas = document.getElementById ("canvasId");
    var ctx = canvas.getContext ("2d");
    ctx.strokeText(String(typeFeaturesList[1].type), 10, 10);
    ctx.moveTo (10, 10);
    ctx.lineTo (10, 50);
    ctx.stroke ();
}
//draw broken line
function drawBrokenLine () {
    var canvas = document.getElementById ("canvasId");
    var ctx = canvas.getContext ("2d");
    try {
        ctx.strokeText (String(typeFeaturesList[3].type), 10, 10);
    }
    catch (e) {
        console.log (e);
    }
    ctx.stroke ();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "blue";
    var x = [40, 70, 100, 130, 160, 190];
    var y = [40, 80, 40, 80, 40, 80];
    ctx.moveTo (10, 80);
    ctx.beginPath ();
    for (var i = 0; i < x.length; i++) {
        ctx.lineTo (x[i], y[i]);
    }
    ctx.stroke ();
}
//--------------------------------------------------------
//--------------------------------------------------------
function getCanvasMethod () {
    var canvas  = document.getElementById ("canvasId");
    var ctx = canvas.getContext ("2d");
    return ctx;
}

function drawManyRectangle (side, x, color) {
    var ctx = getCanvasMethod ();
    ctx.strokeStyle = color;
    ctx.strokeRect (x, 10, side, side);
    ctx.stroke ();
}
//----------------------------------------------------------
//----------------------------------------------------------
//draw rectangle by canvas
function drawRectangle () {
    var canvas  = document.getElementById ("canvasId");
    var ctx = canvas.getContext ("2d");
    canvas.width = 200;
    canvas.height = 100;
    ctx.strokeText (String(typeFeaturesList[0].type), 10, 10);
    ctx.strokeStyle = "green";
    ctx.fillStyle = "blue";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "brown";
    ctx.rect (10, 30, 80, 40);
    ctx.fill ();
    ctx.stroke ();
}

//------------------------------------------------------------
//ths input point
function main () 
{
    askTypeFeatures ();
    firstMethod ();
}

main ();