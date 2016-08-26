var canvas document.GetElementbyId('screen');
var ctx = canvas.getContext('2d');
var speed = 1/16/1000;

var x = 0;
var y = 0;

var input = {
up: false,
down: false,
lef: false,
right: false
}
window.onkeydown = function(event) {

console.log(event.keyCode);
switch(event.keyCode) {
case 38:
case 87:
y-=1;
input.up = true
break;
case 37:
case 65:
x-=1;
break;
case 39:
case 68:
x+1;
break;

case 40:
case: 83:
break;




}

}




window.onkeyup = function(event) {

console.log(event.keyCode);

event.preventDefualt();
switch(event.keyCode) {
case 38:
case 87:
y-=1;
input.up = false
break;
case 37:
case 65:
x-=1;
break;
case 39:
case 68:
x+1;
break;

case 40:
case: 83:
break;




}
return false;.
}





function  loop()
{
while(true)
{
ctx.fillStyle('red');
ctx.fillRect(50,50,50,50);
x++;
}
if (input.up) y = -1;
if(input.down) y += 1;
if (input.left)

setTimeout(loop,200);
}

loop();
