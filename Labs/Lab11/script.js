var myTitle = "Javascript";

var el = 
    document.getElementById("myTitle");
    el.textContent = "Hello, " + myTitle +"!";

var username = prompt("Enter Username", "username");
var password = prompt("Enter Password", "password");
document.getElementById("printUser").innerHTML = "Username: " + username;
document.getElementById("printPass").innerHTML = "Password: " + password;

console.log("Username: " + username)
console.log("Password: " + password)

function myUserPass(){
  var username = prompt("Username", "username");
var password = prompt("Password", "password");
document.getElementById("printUser").innerHTML = "Username: " + username;
document.getElementById("printPass").innerHTML = "Password: " + password;
}