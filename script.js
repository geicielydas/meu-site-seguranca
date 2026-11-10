
let lendo = false;
let fala;

function finalizarLeitura() {
    lendo = false;
}

function lerEmVozAlta() {
    if (lendo) {
        if (speechSynthesis.paused) {
            speechSynthesis.resume();
        } else {
            speechSynthesis.pause();
        }
        return;
    }

    const conteudo = document.querySelector("main");

    if (!conteudo) {
        alert("Não encontrei o conteúdo da página.");
        return;
    }

    fala = new SpeechSynthesisUtterance(conteudo.innerText);
    fala.lang = "pt-BR";

    fala.onstart = function() {
        lendo = true;
    };

    fala.onend = finalizarLeitura;
    fala.onerror = finalizarLeitura;

    speechSynthesis.cancel();
    speechSynthesis.speak(fala);
}

