var submit = document.getElementById("submit").addEventListener("click",function() {
var firstName = getElementById("first");
var lastName = getElementById("last");
var age = getElementById("age");
var submit = getElementById("submit");
var form = getElementById("myform");
var male = getElementById("malegender");
var female = getElementById("femalegender");
var vegetarian = getElementById("vegetarian");
var kosher = getElementById("kosher");
var lactose = getElementById("lactose free");
var location = getElementById("location");

function manOrWoman(){
    if(male.checked){
        return "male";
    } else if (female.checked){
        return "female";
    }
}
function dietRestriction(){
    if(vegetarian.checked && kosher.checked && lactose.checked === true){
        return"vegetarian","kosher","lactose"
    } else if( vegetarian.checked && kosher.checked === true){
        return "vegetarian","kosher";
    } else if(kosher.checked && lactose.checked === true){
        return "kosher","lactose"
    } else if(vegetarian.checked && lactose.checked === true){
        return "vegetarian","lactose"
    }else if(vegetarian.checked === true){
        return "vegetarian"
    } else if(kosher.checked === true){
        return "kosher"
    } else if(lactose.checked == true){
        return "lactose"
    }
    alert(`First Name:${firstName.value} \n Last Name${lastName.value} \n Age:${age.value} \n Gender:${manOrWoman()} \n Location:${location.value} \n Diet: ${dietRestriction()} `);
}})
