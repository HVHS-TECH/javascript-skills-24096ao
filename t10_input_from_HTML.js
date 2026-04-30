/****************************
t10_input_from_HTML.js
****************************/
console.log("t10_input_from_HTML.js")

    const OUTPUT = document.getElementById("spaceForJavaScriptOutput")

    //var
    let age = 27;
    let pocketMoney = 5;
    let year = 2059;

/****************************
Main code
****************************/


/****************************
functions
****************************/
function getFormInput() {
    const NAME_FIELD = document.getElementById("nameField")
    let name = NAME_FIELD.value;
    OUTPUT.innerHTML = "<p>Your name is "+name+"</p>"
    console.log(name)
}


/****************************
end of code
****************************/

