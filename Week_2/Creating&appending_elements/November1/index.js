var intro = document.createElement("h1")
intro.textContent = "This is my sunday assignment"
intro.style.textAlign = "center"
intro.style.color = "blue"
intro.style.fontSize = "60px"
document.body.append(intro)

var nav = document.createElement("navbar")
document.body.append(nav)

var a1 = document.createElement("a")
document.getElementById("nav")
a1.textContent = "home"
document.body.append(nav)

var a2 = document.createElement("a")
document.getElementById("nav")
a2.textContent = "about"
document.body.append(nav)

var a3 = document.createElement("a")
document.getElementById("nav")
a3.textContent = "about"
document.body.append(nav)


//Paragraph
var par = document.createElement("p")
par.textContent = "Duis nulla mollit ad occaecat culpa eu nisi.Ipsum deserunt anim sit laborum occaecat cupidatat aliquip tempor duis. Laboris culpa consequat occaecat aliqua eiusmod eu proident magna velit exercitation. Sit irure culpa ut eiusmod fugiat sit eiusmod mollit consectetur commodo. Anim ipsum elit elit proident aute consectetur ea irure non elit esse. Eu dolore nostrud minim quis proident do nulla consectetur ad ea. Minim fugiat do occaecat eu dolor incididunt anim dolore proident irure deserunt."
par.style.padding = "45px"
document.body.append(par)

var mylist = document.createElement("ul") 
document.body.append(mylist)

// list
document.getElementById("ul")
var newli = document.createElement ("li")
newli.textContent = "commodo dolore fugiat commodo ipsum non consectetur." 
mylist.append(newli)

document.getElementById("ul")
var newli2 = document.createElement ("li")
newli2.textContent = "Exercitation dolor qui eu ad anim nostrud labore."
mylist.append(newli2)

document.getElementById("ul")
var newli3 = document.createElement("li")
newli3.textContent = "Sit non magna reprehenderit mollit sit non dolore in sunt non culpa id proident."
mylist.append(newli3)

//Footer
var foot = document.createElement ("footer")
foot.textContent = "Aliqua dolor minim amet do sunt velit laborum nisi. Ut reprehenderit occaecat cillum voluptate do consequat est consectetur. Minim pariatur id excepteur nisi in dolor minim in."
foot.style.border = "1px dashed"
document.body.append(foot)