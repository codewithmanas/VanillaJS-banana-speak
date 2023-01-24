
let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");


console.log(txtInput);


// console.log(btnTranslate);


function clickHandler(){
    console.log("clicked!");
    console.log("input",txtInput.value);

}

btnTranslate.addEventListener("click", clickHandler); // .addEventListener("click", callback)



