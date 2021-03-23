function move(){
  let box = document.getElementById("box")
  if(box.style.left.replace("px","") < 420 && check == true){
    moveRight(box);
  }else if(box.style.left.replace("px","") == 420 || check == false) {
    if(box.style.left.replace("px","") > 0){
      check = false
      moveleft(box)
    } else if(box.style.left.replace("px","") == 0){
      check = true
    }
  }
}
function moveRight(box){
  if(box.style.left != ""){
    let temp = box.style.left.replace("px","");
    temp = parseInt(temp);
    box.style.left = temp+1+"px";
  }else{
    box.style.left = "1px";
  }
}
function moveleft(box){
  if(box.style.left != ""){
    let temp = box.style.left.replace("px","")
    temp = parseInt(temp)
    box.style.left = temp-1 + "px"
  } else {
    box.style.left = "1px"
  }
}
var check = true;
setInterval(move,20);