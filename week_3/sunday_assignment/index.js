
for (let i = 0; i < 5; i++){
    const random = document.createElement("h2")
    random.innerHTML = " I am Sleepy ";
    document.body.appendChild(random);
}
var amount = 5;
for(var i = 0; i < amount; i++){
    var new_div = document.createElement("div");
    new_div.className = "hello";
    document.body.appendChild(new_div);
   var text = document.createElement("h2")
   text.style.textContent("this sucks")
   document.body.appendChild(text)
    console.log("This is repeat " + i)
}