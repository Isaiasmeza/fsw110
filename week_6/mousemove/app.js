var x = document.getElementsByClassName("red-box");
var h = document.createElement("h3");
document.body.append(h)
x[0].addEventListener("mousemove", function myFunction(e){
    var x = e.clientX;
    var y = e.clientY;
    var coor = "coordinates: (" + x + "," + y +")";
    h.textContent = coor;
});
x[0].addEventListener("mouseout", function(e){
    h.textContent = "";
})