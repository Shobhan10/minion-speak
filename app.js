const inputText = document.querySelector('#input');
const btnTranslate = document.querySelector('.btn');
const outputText = document.querySelector('#output');


const url = "https://api.funtranslations.com/translate/minion.json"
// const url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function fetchTranlationApi(text) {
    return url + '?' + 'text=' + text
}

function errorHandling(error) {
    console.log('error occured', error);
    alert('There is a problem with the server! Try again later.')
}

function clickResult() {
    const txtInput = inputText.value

    fetch(fetchTranlationApi(txtInput))
    .then(response => response.json())
    .then(json => {
        let translatedText = json.contents.translated;
        outputText.innerText = translatedText;
    })
    .catch(errorHandling);
}

btnTranslate.addEventListener('click', clickResult)