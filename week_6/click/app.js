// make the box disapear when the user clicks it
var box = document.querySelector("div");
box.addEventListener("click", function(){
    box.className = "none";
});