for (let i = 0; i < 10; i++){
const hi = document.createElement("h1")
hi.innerHTML = " Hello World";
document.body.appendChild(hi);
}
//part 2 
const names = ["steve","larry","joe","shirley","steph", "nate","ricky","emily"]
var newNames = document.getElementById("list")
 for( var i = 0; i < names.length; i++ ) {
     var newName2 = document.createElement("li")
     newName2.textContent = names[i]
     document.body.append(newName2)
 }
