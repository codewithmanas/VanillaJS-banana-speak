let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
let outputDiv = document.querySelector("#output");


// console.log(txtInput);
// console.log(btnTranslate);
console.log(outputDiv);
// outputDiv.innerText = "Manas Ranjan";


function clickHandler(){
    console.log("clicked!");
    console.log("input",txtInput.value);
    // console.log("input",btnTranslate.value); // empty string
    outputDiv.innerText = "Bello, amee nama to? " + txtInput.value;
    

}

// .addEventListener("click", callback)
btnTranslate.addEventListener("click", clickHandler); 



