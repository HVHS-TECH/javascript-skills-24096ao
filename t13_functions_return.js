/****************************
t13_functions_returns.js
****************************/
console.log("t13_functions_returns.js")

    const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
    const NAME_FIELD = document.getElementById("nameField")
    const AGE_FIELD = document.getElementById("ageField")
    const POCKET_MONEY_FIELD = document.getElementById("pocketMoneyField")
/****************************
Main code
****************************/


/****************************
functions
****************************/
function getFormInput() {
    let name = String(NAME_FIELD.value)
    let age = Number(AGE_FIELD.value);
    let pocketMoney = Number(POCKET_MONEY_FIELD.value);
    let chocolateBarChange = calculateChange(pocketMoney,4);

    OUTPUT.innerHTML = "<p>Your name is "+name+"</p>"
    OUTPUT.innerHTML += "<p>Your Age is "+age+"</p>"
    OUTPUT.innerHTML += "<p>You have "+pocketMoney+" dollars</p>"
    OUTPUT.innerHTML += "<p>Your change for a chocolate bar is $"+chocolateBarChange+"</p>"
    console.log(name)
    console.log(age)
    console.log("$"+pocketMoney)
    console.log("$"+chocolateBarChange)

    if (pocketMoney > 4) {
        OUTPUT.innerHTML += "<p>A chocolate bar costs 4$ <br> you can buy a chocolate bar for 4$</p>"
    } else {
        OUTPUT.innerHTML += "<p>A chocolate bar costs 4$ <br> you CAN'T buy a chocolate bar for 4$</p>"
    }

    function calculateChange(_pocket_money,_price) {
        let change = _pocket_money - _price;
        return change;
    }
}
/****************************
end of code
****************************/

