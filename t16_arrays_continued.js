/****************************
t16_arrays_continued.js
****************************/
console.log("t16_arrays_continued.js")

const ITEM_FIELD = document.getElementById("itemField")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput")

let classArray = ["Alice", " Bob", " jhon", " kaia", " olivia"]
let item = ITEM_FIELD.value;

/****************************
Main code
****************************/
addItem()
console.log("in your shopping list is " +classArray)

/****************************
functions
****************************/
function addItem() {
    for (let i=0; i<1; i++) {
    classArray.push(" " +item)
    }
}
/****************************
end of code
****************************/


