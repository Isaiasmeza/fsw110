var title = document.createElement("h1")
title.textContent = "Welcome to my JS site"
title.style.textAlign = "center"
document.body.append(title)
//unordere_list
var mylist = document.createElement("ol") 
document.body.append(mylist)
// list_items
var grocery = document.getElementById("ol")
var newli = document.createElement ("li")
newli.style.fontSize = "35px"
newli.textContent = "milk" 
mylist.append(newli)

var grocery = document.getElementById("ol")
var newli2 = document.createElement ("li")
newli2.textContent = "cookies"
newli2.style.fontSize = "35px"
mylist.append(newli2)

var grocery = document.getElementById("ol")
var newli3 = document.createElement("li")
newli3.textContent = "Cereal"
newli3.style.fontSize = "35px"
mylist.append(newli3)