/****************************
t12_conditionals.js
****************************/
console.log("t12_conditionals.js")

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
    OUTPUT.innerHTML = "<p>Your name is "+name+"</p>"
    OUTPUT.innerHTML += "<p>Your Age is "+age+"</p>"
    OUTPUT.innerHTML += "<p>You have "+pocketMoney+" dollars</p>"
    console.log(name)
    console.log(age)
    console.log(pocketMoney)

    if (pocketMoney > 4) {
        OUTPUT.innerHTML += "<p>A chocolate bar costs 4$ <br> you can buy a chocolate bar for 4$ :(</p>"
    } else {
        OUTPUT.innerHTML += "<p>A chocolate bar costs 4$ <br> you CAN'T buy a chocolate bar for 4$ :(</p>"
    }
}

/****************************
end of code
****************************/

