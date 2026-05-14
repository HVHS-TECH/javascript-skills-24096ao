/****************************
t20_constants.js
****************************/
console.log("t20_constants.js");

    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    const ITEM_FIELD = document.getElementById("itemField");
    const ADD_ITEM = document.getElementById("addItem");

    let shoppingList = [];
    let newItem = {
        item = String(ITEM_FIELD.value);
        shortenItem = newItem.trim();
        lowerCaseItem = newItem.toLowerCase();
    }
/****************************
Main code
****************************/
if (ADD_ITEM.checkValidity() === false && ADD_ITEM.value != Number) {
    OUTPUT.innerHTML = "<p>Please fill all fields in correctly</p>";
    ADD_ITEM.length == 0;
}
/****************************
functions
****************************/
function getFormInput() {
    shoppingList.push(newItem);
    
    OUTPUT.innerHTML += "<p>"+shoppingList+"</p>";
    OUTPUT.innerHTML += "<p>You added "+newItem+"<br></p>";
    
    console.log(""+shoppingList);
    console.log(newItem);
}
/****************************
end of code
****************************/