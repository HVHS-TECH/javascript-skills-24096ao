/****************************
t21_objects.js
****************************/
console.log("t21_objects.js")

    const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
    const NAME_FIELD = document.getElementById("nameField")
    const AGE_FIELD = document.getElementById("ageField")
    const POCKET_MONEY_FIELD = document.getElementById("pocketMoneyField")

    var user = {
            name: String(NAME_FIELD.value),
            age: String(AGE_FIELD.value),
            pocketMoney: String(POCKET_MONEY_FIELD.value)
        };
/****************************
Main code
****************************/


/****************************
functions
****************************/
function getFormInput() { 
    console.log("name: "+user.name);
    console.log("age: "+user.age);
    console.log("pocket money: "+user.pocketMoney);
}

/****************************
end of code
****************************/