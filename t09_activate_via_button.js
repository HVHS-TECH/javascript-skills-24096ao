/****************************
t09_activate_via_buttons.js
****************************/
console.log("t09_activate_via_buttons.js")

    const OUTPUT = document.getElementById("spaceForJavaScriptOutput")

    // variables
    let name = "Bob";
    let age = 27;
    let pocketMoney = 5;
    let year = 2059;

/****************************
Main code
****************************/


/****************************
functions
****************************/
function start() {
    console.log("Start")

    welcome();
    displayWelcome("Jhon",107)
    displayProduct("chocolate Bar", 4)
    displayProduct("Chips", 3)
    displayProduct("Drink", 2.50)
    OUTPUT.innerHTML += "<p>The current year is "+ year + "</p>";
    OUTPUT.innerHTML += "<p>if you spent half your money you would have ", pocketMoney/2, "dollars</p>";
    OUTPUT.innerHTML += "<p>Then you get $3 you now have ", pocketMoney+3, "dollars</p>";
}

function welcome() {
    OUTPUT.innerHTML = "<h1>Welcome to the shop!</h1>";
}

function displayWelcome(_name, _age) {
    OUTPUT.innerHTML += "<h1>Hi " +_name + "</h1>";
    OUTPUT.innerHTML += "<p>you are " +_age + " years old</p>";
}

function displayProduct(_productName,_price) {
    OUTPUT.innerHTML += "<p>" +_productName + ": $" +_price + "</p>";
}



/****************************
end of code
****************************/

