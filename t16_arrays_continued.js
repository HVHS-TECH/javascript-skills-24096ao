/****************************
t16_arrays_continued.js
****************************
const ITEM_FIELD = document.getElementById("itemField");
const ADD_ITEM_FIELD = document.getElementById("addItem");
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

let classArray = ["Alice", " Bob", " jhon", " kaia", " olivia"];
let item = ITEM_FIELD.value;
let addItem = ADD_ITEM_FIELD;

****************************
Main code
****************************
console.log(addItem)
/****************************
functions
****************************
function addedItem(){
    addItem+1;
}
for (let i=addItem; i<1; i++) {
    console.log(addItem)
}
/****************************
end of code
****************************/
const ITEM_FIELD = document.getElementById("itemField");

let classArray = ["Alice", " Bob", " jhon", " kaia", " olivia"];

let item = ITEM_FIELD;

function AddItem() {
    classArray.push(item);
    console.log(classArray);
}