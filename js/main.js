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

];

function askTypeFeatures ()
{
    var promptAsk = prompt ("nl or sl or r");
    globalAskVariable = promptAsk;
}

function firstMethod () {
    if (globalAskVariable == "nl")
    {
        alert (String(typeFeaturesList[2].type));
        var canvas = document.getElementById ("canvasId");
        var ctx = canvas.getContext("2d");
        ctx.moveTo (50, 70);
        ctx.lineTo (100, 50);
        ctx.stroke ();
    }
    if (globalAskVariable == "sl")
    {
        alert (String(typeFeaturesList[1].type));
        secondMethod ();
    }
    if (globalAskVariable == "r")
    {
        alert (String(typeFeaturesList[0].type));
        drawRectangle ();
    }
}

function secondMethod ()
{
    var canvas = document.getElementById ("canvasId");
    var ctx = canvas.getContext ("2d");
    ctx.moveTo (10, 10);
    ctx.lineTo (10, 50);
    ctx.stroke ();
}

//draw rectangle by canvas
function drawRectangle () {
    var canvas  = document.getElementById ("canvasId");
    var ctx = canvas.getContext ("2d");
    canvas.width = 200;
    canvas.height = 100;
    ctx.strokeStyle = "green";
    ctx.fillStyle = "blue";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "brown";
    ctx.rect (10, 30, 80, 40);
    ctx.fill ();
    ctx.stroke ();
}

//-------------------------------------------------------------
//ths input point
function main () 
{
    askTypeFeatures ();
    firstMethod ();
}

main ();