// testing
let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
let txtArea = document.querySelector("textarea");
let docBody = document.querySelector("body");


console.log(txtInput);
console.log(txtArea);


// console.log(btnTranslate);


function clickHandler(){
    console.log("clicked!");
    console.log("input",txtInput.value);
    console.log("input",btnTranslate.value);
    console.log("input",txtArea.style.backgroundColor = "yellow");
    console.log("input",docBody.style.backgroundColor = "green");
    console.log("input",txtArea.style.marginLeft = "0");

}

btnTranslate.addEventListener("click", clickHandler); // .addEventListener("click", callback)



