var name = getElementById("name");
var cell = getElementById("cell");
var age = getElementById("age");
var submit = getElementById("submit")
var form = getElementById("form")

submit.addEventListener("click", function(){
    alert(name.value, age.value,cell.value); myform.reset();
});