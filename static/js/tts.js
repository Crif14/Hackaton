document.querySelector("#bottonetesto").addEventListener("click", function () {
    const testo = document.querySelector("#testo").value;

    if (!testo.trim()) {
        alert("Inserisci un testo da leggere!");
        return;
    }


    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(testo);

    utterance.lang = "it-IT"; // Italiano
    utterance.volume = 1; // Volume (da 0 a 1)
    utterance.rate = 1; // Velocità di lettura (1 è normale)
    utterance.pitch = 100; // Tono (1 è normale)

    // Riproduce il testo vocalmente
    synth.speak(utterance);
});