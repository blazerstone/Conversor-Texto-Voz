
// Global var

var txtInput = document.querySelector('#txtInput');
var listaDeVozes = document.querySelector('#listaDeVozes');
var btnFalar = document.querySelector('#btnFalar');
var synth = window.speechSynthesis;
var voices = [];

// Main Function

function NewVoices() {
    voices = synth.getVoices();
    var selectedIndex = listaDeVozes.selectedIndex < 0 ? 0 : listaDeVozes.selectedIndex;
    listaDeVozes.inneHTML = '';

    voices.forEach((voice) => {
        var listItem = document.createElement('option');
        listItem.textContent = voice.name
        listItem.setAttribute('data-lang', voice.lang);
        listItem.setAttribute('data-name', voice.name);
        listaDeVozes.appendChild(listItem);
    });

    listaDeVozes.selectedIndex = selectedIndex;
}

// Button Event

btnFalar.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(txtInput.value);
    
    // var selectedVoiceName = listaDeVozes.selectedOptions[0].getAttribute('data-name');
    
    voices.forEach((voice) => {
        toSpeak.voice = voice;
    });

    synth.speak(toSpeak);
})

// Verificar condição

if (speechSynthesis !== undefined) {
    speechSynthesis.onvoiceschanged = NewVoices;
}

// Executar Main Function

NewVoices();
