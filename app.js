const inputText = document.querySelector('#input');
const btnTranslate = document.querySelector('.btn');
const outputText = document.querySelector('#output');


const url = "https://api.funtranslations.com/translate/minion.json"


function fetchTranlationApi(text) {
    return url + '?' + 'text=' + text
}

function errorHandling(error) {
    console.log('error occured', error);
    alert('There is a problem with the server! Try again later.')
}

function clickResult() {
    const txtInput = inputText.value // input

    // Processing by calling server
    fetch(fetchTranlationApi(txtInput))
    .then(response => response.json())
    .then(json => {
        let translatedText = json.contents.translated;
        outputText.innerText = translatedText; // output
    })
    .catch(errorHandling);
}

btnTranslate.addEventListener('click', clickResult)