let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// console.log(txtInput);

// btnTranslate.addEventListener("click", function clickEventHandler() {
//     console.log("clicked!");
//     console.log("input", txtInput.value);
// })

function clickHandler() {
    console.log("clicked!");
    console.log("input", txtInput.value);
   outputDiv.innerText = "ajsjsjsjsjsjsj  " + txtInput.value;
};



btnTranslate.addEventListener("click", clickHandler);

btnTranslate.addEventListener("click", clickHandler);