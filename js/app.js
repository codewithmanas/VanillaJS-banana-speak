let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
let outputDiv = document.querySelector("#output");

let serverURL = "https://apibyneog.imanas96.repl.co/translate/yoda.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}
function clickHandler(){
    // outputDiv.innerText = "Bello, amee nama to? " + txtInput.value;
    let inputText = txtInput.value;

    // calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))

}

// .addEventListener("click", callback)
btnTranslate.addEventListener("click", clickHandler); 

