/****************************
t06_functions.js
****************************/
console.log("t06_functions.js")

const OUTPUT = document.getElementById("spaceForJavaScriptOutput")

// variables
let name = "Bob";
let age = 27;
let pocketMoney = 5;
let year = 2059;

/****************************
Main code
****************************/
welcome();
OUTPUT.innerHTML += "<h1>Hi " + name + "</h1>";
OUTPUT.innerHTML += "<p>As of " + year + " you are " + age + " years old</p>";
OUTPUT.innerHTML += "<p>You were born in ", year - age + "</p>";
OUTPUT.innerHTML += "<p>The current year is "+ year + "</p>";
OUTPUT.innerHTML += "<p>if you spent half your money you would have ", pocketMoney/2, "dollars</p>";
OUTPUT.innerHTML += "<p>Then you get $3 you now have ", pocketMoney+3, "dollars</p>";


/****************************
functions
****************************/
function welcome() {
    OUTPUT.innerHTML = "<h1>Welcome to the shop!</h1>";
} 


/****************************
end of code
****************************/

