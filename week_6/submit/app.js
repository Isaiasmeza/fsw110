// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function
var sub = document.getElementById("submit-me");
sub.addEventListener("click", function(e) {
    e.preventDefault();
});