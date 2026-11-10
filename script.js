
let lendo = false;

function finalizarLeitura() {
    lendo = false;
}

function lerEmVozAlta() {

    if (lendo === true) {

        if (speechSynthesis.paused === true) {
            speechSynthesis.resume();
        } else {
            speechSynthesis.pause();
        }

        return;
    }

    let conteudo = document.querySelector("main");
    let texto = conteudo.innerText;

    let fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";
    fala.onend = finalizarLeitura;
    fala.onerror = finalizarLeitura;

    speechSynthesis.cancel();
    speechSynthesis.speak(fala);

    lendo = true;
}

