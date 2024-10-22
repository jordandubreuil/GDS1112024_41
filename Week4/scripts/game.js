var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var fps = 1000/60;
var timer = setInterval(game, fps);

var x = 50;
var y = canvas.height/2;
var w = 100;
var h = 100;
var moveAmmountX = 10;
var moveAmmountY = 10;

function game(){
    //Clear the canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);
    //Update the canvas
    x += moveAmmountX;
    y += moveAmmountY;
    //Draw our GameObjects
    ctx.fillStyle = "red";
    //ctx.fillRect(x,y,w,h);
    ctx.beginPath();
    ctx.arc(x,y,50,0, 2* Math.PI);
    ctx.fill();
    //Stay in boundary of canvas
    if(x > canvas.width - 50){     
        moveAmmountX *= -1;
    }
    if(x < 50){
        moveAmmountX *= -1;
    }
    if(y<50){
        moveAmmountY *= -1;
    }
    if(y>canvas.height - 50){
        moveAmmountY *= -1;
    }

}

