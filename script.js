
// Mensagem de boas-vindas
console.log("Bem-vindo ao site Segurança Digital!");

// Identificar links suspeitos
function verificarMensagem(mensagem) {
    const sinaisDeAlerta = [
        "clique no link",
        "prêmio",
        "pix",
        "urgente",
        "senha",
        "resgate"
    ];

    const texto = mensagem.toLowerCase();

    const suspeita = sinaisDeAlerta.some(sinal =>
        texto.includes(sinal)
    );

    if (suspeita) {
        return "Atenção! Esta mensagem pode ser suspeita. Verifique antes de clicar.";
    } else {
        return "Não foram encontrados sinais comuns de golpe. Continue atento!";
    }
}

// Exemplo de mensagem
const mensagem = "Parabéns! Você ganhou um prêmio. Clique no link para resgatar.";

console.log(verificarMensagem(mensagem));
