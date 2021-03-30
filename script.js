const parentDiv = document.getElementById('box-container')
const maxHeight = 300 - 60
const maxWidth = 500 - 60
const Xposition = []
const Yposition = []
const box = []
function boxGenerator (num) {
  for (let i = 0; i < num; i++) {
    const randomColors = colorGenerate()
    const dx = dxGenerator()
    const dy = dyGenerator()
    const childDiv = document.createElement('div')
    parentDiv.append(childDiv)
    childDiv.setAttribute('name', `childDiv${i}`)
    childDiv.setAttribute('id', `cricle${i}`)
    childDiv.setAttribute(
      'style',
      `position: absolute; top:${dy}px; left:${dx}px; height: 30px; box-radious:10px;  border-radius: 15px; width:30px; background-color: ${randomColors};`
    )
    box.push(childDiv)
    moveObject(2, 2, dx, dy, childDiv, i)
  }
}
(function userInput () {
  // eslint-disable-next-line no-undef
  const input = prompt('Enter no of boxes: ', '0')
  const numberInput = parseInt(input)
  boxGenerator(numberInput)
}())

function dxGenerator () {
  return Math.floor(Math.random() * maxWidth) + 1
}

function dyGenerator () {
  return Math.floor(Math.random() * maxHeight) + 1
}

function moveObject (valueX, valueY, dx, dy, childDiv, index) {
  setInterval(() => {
    dx += valueX
    childDiv.style.left = dx + 'px'
    dy += valueY
    childDiv.style.top = dy + 'px'
    if (dx > maxWidth || dx < 0) {
      valueX = valueX * -1
    }
    if (dy > maxHeight || dy < 0) {
      valueY = valueY * -1
    }
    Xposition[index] = dx
    Yposition[index] = dy
    for (let i = 0; i < box.length; i++) {
      if (!(i === index)) {
        if ((Xposition[i] < dx + 30) && (Xposition[i] + 30 > dx) && (Yposition[i] < dy + 30) && (Yposition[i] + 30 > dy)) {
          valueX = valueX * -1
          valueY = valueY * -1
        }
      }
    }
  }, 20)
}
function colorGenerate () {
  const colors = [
    '#A52A2A',
    '#7FFFD4',
    '#00FFFF',
    '#FF8C00',
    '#008000',
    '#4B0082',
    '#FF00FF'
  ]
  const colorsNum = Math.floor(Math.random() * colors.length)
  return colors[colorsNum]
}
