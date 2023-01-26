let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
let outputDiv = document.querySelector("#output");

// let serverURL = "https://mock-api-server.imanas96.repl.co/translate/yoda.json";
let serverURL = "https://api.funtranslations.com/translate/minion.json";


function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("error occured", error);
    // alert("Server Down!");
}

function clickHandler(){
    // outputDiv.innerText = "Bello, amee nama to? " + txtInput.value;
    let inputText = txtInput.value;

    // calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        let translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        
        console.log(json.contents.translated)})
    .catch(errorHandler)

}

// .addEventListener("click", callback)
btnTranslate.addEventListener("click", clickHandler); 

