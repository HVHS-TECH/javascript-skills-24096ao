/****************************
t11_data_types.js
****************************/
console.log("t11_data_types.js")

const OUTPUT = document.getElementById("spaceForJavaScriptOutput")

/****************************
Main code
****************************/


/****************************
functions
****************************/
function getFormInput() {
    const NAME_FIELD = document.getElementById("nameField")
    const AGE_FIELD = document.getElementById("ageField")
    const POCKET_MONEY_FIELD = document.getElementById("pocketMoneyField")
    let name = String(NAME_FIELD.value)
    let age = Number(AGE_FIELD.value);
    let pocketMoney = Number(POCKET_MONEY_FIELD.value);
    OUTPUT.innerHTML = "<p>Your name is "+name+"</p>"
    OUTPUT.innerHTML += "<p>Your Age is "+age+"</p>"
    OUTPUT.innerHTML += "<p>You have "+pocketMoney+" dollars</p>"
    console.log(name)
    console.log(age)
    console.log(pocketMoney)
}


/****************************
end of code
****************************/

