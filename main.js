var last_position_of_x, last_position_of_y;
var color="blue";
var width_of_line=4;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var width=screen.width;

var new_width=screen.width-70;
var new_height=screen.height-300;
if(width < 992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e){
    console.log("touchstart");

last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    console.log("touchmove");
current_postion_of_x=e.touches[0].clientX-canvas.offsetLeft;
current_postion_of_y=e.touches[0].clientY-canvas.offsetTop;

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;

console.log("last postion of x =" + last_position_of_x +"last postion of y =" + last_position_of_y);
ctx.moveTo(last_position_of_x, last_position_of_y);

console.log("current position of x ="+ current_postion_of_x +"current postion of y = "+ current_postion_of_y);
ctx.lineTo(current_postion_of_x, current_postion_of_y);
ctx.stroke();

last_position_of_x=current_postion_of_x;
last_position_of_y=current_postion_of_y;

}