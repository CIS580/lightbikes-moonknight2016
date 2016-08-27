/*var c = document.getElementById("screen");
var ctx = c.getContext("2d");
ctx.fillRect(20, 20, 150, 100);

*/

var canvas = document.getElementById("screen");
var ctx = canvas.getContext("2d");

var speed = 2/16/1000;

var x = 0;
var y = 0;

var input = {
up: false,
down: false,
lef: false,
right: false
}

window.onkeydown = function(event) {

//console.log(event.keyCode);
switch(event.keyCode) {
case 38:
case 87:
y-=1;
input.up = true;
break;
case 37:
case 65:
x-=1;
input.left = true;
break;
case 39:
case 68:
x+=1;
input.right = true;
break;

case 40:
case 83:
y+=1;
input.down = true;
break;




}

}

window.onkeyup = function(event) {

//console.log(event.keyCode);

event.preventDefault()
switch(event.keyCode) {
case 38:
case 87:
y-=1;
input.up = false;
break;
case 37:
case 65:
x-=1;
input.left = false;
break;
case 39:
case 68:
x+=1;
input.right = false;
break;

case 40:
case 83:
y+=1;
input.down = false;
break;




}
return false;
}





function  loop()
{

ctx.fillStyle  = "red";
ctx.fillRect(x,y,50,50);

if (input.up) y -= 1;
if(input.down) y += 1;

if (input.left) x -= 1;
if(input.right) x += 1;
setTimeout(loop,speed);


}

loop();
