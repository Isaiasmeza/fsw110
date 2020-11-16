var square = document.getElementById("square");
square.addEventListener("mouseover", function(){
  square.style.backgroundColor = "blue";
})
square.addEventListener("mousedown", function(){
  square.style.backgroundColor = "red";
})
square.addEventListener("mouseup", function(){
  square.style.backgroundColor = "yellow";
})
square.addEventListener("dblclick", function(){
  square.style.backgroundColor = "green";
})
window.addEventListener("scroll", function(){
  square.style.backgroundColor = "orange";
})
document.addEventListener("keydown", function(event){
  if (event.code == 'KeyB'){
    square.style.backgroundColor = "blue";
  } else  if (event.code == "KeyR"){
    square.style.backgroundColor = "red";
  } else if (event.code == 'KeyY'){
    square.style.backgroundColor = "yellow";
  } else if (event.code == "KeyG"){
    square.style.backgroundColor = "green";
  } else if (event.code == 'KeyO'){
    square.style.backgroundColor = "orange";
  } else {
    console.log("result");
  }
})