var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(400, 300, 50, 0, 2 * Math.PI);
ctx.stroke(); 
canvas.addEventListener("mousedown",my_MouseDown);

function my_MouseDown(e){
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("X = " + mouse_x + ",Y = " + mouse_y);
    color = document.getElementById("color").value;
    console.log(color);
    circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 50, 0, 2 * Math.PI);
    ctx.stroke();
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}