var globalAskVariable = "";

function askValue ()
{
    var promptAsk = prompt ("yes or no?");
    globalAskVariable = promptAsk;
};

function firstMethod () {
    if (globalAskVariable == "yes")
    {
        var canvas = document.getElementById ("canvasId");
        var ctx = canvas.getContext("2d");
        ctx.moveTo (50, 70);
        ctx.lineTo (100, 50);
        ctx.stroke ();
    }
    else
    {
        secondMethod ();
    }
};

function secondMethod ()
{
    var canvas = document.getElementById ("canvasId");
    var ctx = canvas.getContext ("2d");
    ctx.moveTo (10, 10);
    ctx.lineTo (10, 50);
    ctx.stroke ();
};

//ths input point
function main () 
{
    askValue ();
    firstMethod ();
};

main ();