var box;
var maxBoxX = 500 - 50;
var maxBoxY = 300 - 50;
var speed = 5;
window.onload = init

function init() {
  box = document.getElementById("box");
  box.posX = box.offsetLeft;
  box.posY = box.offsetTop;
  box.velX = speed;
  box.velY = speed;
  box.move = true;
  setInterval(moveBox,30);
}

function moveBox() {
  if (box.move) {
    box.posX += box.velX;
    box.posY += box.velY;

    if(box.posX <= 0) {
      box.posX = 0;
      box.velX = -box.velX;
    }

    if(box.posX >= maxBoxX) {
      box.posX = maxBoxX;
      box.velX = -box.velX;
    }

    if(box.posY <= 0){
      box.posY = 0;
      box.velY = -box.velY;
    }
    
    if(box.posY >= maxBoxY) {
      box.posY = maxBoxY;
      box.velY = -box.velY;
    }
    box.style.left = box.posX + "px";
    box.style.top  = box.posY + "px";
  }
}