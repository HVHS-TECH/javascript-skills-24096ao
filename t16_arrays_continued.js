/****************************
t16_arrays_continued.js
****************************/
console.log("t16_arrays_continued.js");

    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    const ITEM_FIELD = document.getElementById("itemField");

    const ShoppingList = [ ];

    let item = String(ITEM_FIELD.value);
    
    let newItem = [item];
    /*let length = ShoppingList.length;*/
/****************************
Main code
****************************/

/****************************
functions
****************************/
function AddItem() {
    ShoppingList.length = ShoppingList.length + 3;
    console.log(item);
    console.log(" "+length);
    ShoppingList.push(item);
}

function Finish() {
    
}
/****************************
end of code
****************************/


/*
    * start
    * User imputs item
    * add item to array and display
    * add another?
    * Yes- repeat
    * No - Display final array
 */