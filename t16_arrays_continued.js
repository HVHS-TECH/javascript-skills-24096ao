/****************************
t16_arrays_continued.js
****************************/
console.log("t16_arrays_continued.js")

const CHOICE_FIELD = document.getElementById("choiceField")

/****************************
Main code
****************************/
function start() {
    let choice = Number(CHOICE_FIELD.value);
    
    console.log("started")
    console.log(choice)
    
    for (let i=choice; i>=0; i--) {
        console.log(i+ " bottles of bear on the wall")
    }
    
    console.log("Theres no more bears :(")
}


/****************************
functions
****************************/



/****************************
end of code
****************************/

