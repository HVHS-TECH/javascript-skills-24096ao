/****************************
t22_the_DOM.js
****************************/
console.log("t22_the_DOM.js")

    const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
    const NAME_FIELD = document.getElementById("nameField")
    const AGE_FIELD = document.getElementById("ageField")
    const POCKET_MONEY_FIELD = document.getElementById("pocketMoneyField")

    var user = {
            name: String(NAME_FIELD.value),
            age: Number(AGE_FIELD.value),
            pocketMoney: Number(POCKET_MONEY_FIELD.value),
        };


/****************************
Main code
****************************/
function getFormInput() { 
    console.log("getFormInput is running");

    userChange(NAME_FIELD.value, AGE_FIELD.value, POCKET_MONEY_FIELD.value);

    console.log("name: "+user.name);
    console.log("age: "+user.age);
    console.log("pocket money: "+user.pocketMoney);
}

function removeFormInput() {
    console.log("removeFormInput is running");

    userChange("name", 0, 0);

    console.log("name: "+user.name);
    console.log("age: "+user.age);
    console.log("pocket money: "+user.pocketMoney);
}


function userChange(_name,_age,_pocketMoney) {
    user.name = _name;
    user.age = _age;
    user.pocketMoney = _pocketMoney;
}

/****************************
end of code
****************************/