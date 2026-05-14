/****************************
t16_arrays_continued.js
****************************/
console.log("t16_arrays_continued.js");

    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    const ITEM_FIELD = document.getElementById("itemField");

    let shoppingList = [ ];
    let newItem = String(ITEM_FIELD.value);
/****************************
Main code
****************************/


/****************************
functions
****************************/
function getFormInput() {
    shoppingList.push(newItem);
    
    OUTPUT.innerHTML = "<p>"+shoppingList+"</p>";
    OUTPUT.innerHTML += "<p>You added "+newItem+"</p>";
    
    console.log(""+shoppingList);
    console.log(newItem);
}
/****************************
end of code
****************************/