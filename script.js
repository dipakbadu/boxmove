const parentDiv = document.getElementById("box-container");
let maxHeight = 300 - 60;
let maxWidth = 500 - 60;
function boxGenerator(num) {
  for (i = 0; i < num; i++) {
    const randomColors = colorGenerate();
    const dx = dxGenerator();
    const dy = dyGenerator();
    const aDiv = document.createElement("div");
    parentDiv.append(aDiv);
    aDiv.setAttribute("name", `aDiv${i}`);
    aDiv.setAttribute(
      "style",
      `position: absolute; top:${dy}px; left:${dx}px; height: 60px;   border-radius: 25px; width:60px; background-color: ${randomColors};`
    );
    moveObject(2, 2, dx, dy, aDiv);
  }
}
(function userInput(){
  let input = prompt("Enter no of boxes: ","0")
  let numberInput = parseInt(input)
  boxGenerator(numberInput);
}())

function dxGenerator() {
  return Math.floor(Math.random() * maxWidth) + 1;
}

function dyGenerator() {
  return Math.floor(Math.random() * maxHeight) + 1;
}

function moveObject(valueX, valueY, dx, dy, aDiv) {
  setInterval(() => {
    dx += valueX;
    aDiv.style.left = dx + "px";
    dy += valueY;
    aDiv.style.top = dy + "px";
    if (dx > maxWidth || dx < 0) {
      valueX = valueX * -1;
    }
    if (dy > maxHeight || dy < 0) {
      valueY = valueY * -1;
    }
  }, 20);
}
function colorGenerate() {
  const colors = [
    "#A52A2A",
    "#7FFFD4",
    "#00FFFF",
    "#FF8C00",
    "#008000",
    "#4B0082",
    "#FF00FF",
  ];
  const colorsNum = Math.floor(Math.random() * colors.length);
  return colors[colorsNum];
}