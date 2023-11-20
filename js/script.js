// Variável para armazenar o número aleatório gerado pelo computador
var numeroAleatorio = gerarnumeroAleatorio();

// Contador de tentativas
var numTentativas = 0;

// Função para gerar um número aleatório entre 1 e 100
function gerarnumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

// Função chamada quando o botão é clicado
function checarAdvinhacao() {
    // Incrementa o contador de tentativas
    numTentativas++;

    // Obtém o valor inserido pelo jogador
    var tentativa = document.getElementById('advinhacao').value;

    // Converte o valor para número
    tentativa = parseInt(tentativa);

    // Verifica se o jogador acertou
    if (tentativa === numeroAleatorio) {
        document.getElementById('resultado').innerText = 'Parabéns! Você acertou em ' + numTentativas + ' tentativas.';
        document.getElementById('dica').innerText = '';
    } else {
        // Fornece dicas com base na comparação dos números
        var dica = (tentativa > numeroAleatorio) ? 'Tente um número menor.' : 'Tente um número maior.';
        document.getElementById('resultado').innerText = 'Tente novamente!';
        document.getElementById('dica').innerText = dica;
    }
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    // Gera um novo número aleatório
    numeroAleatorio = gerarnumeroAleatorio();
    
    // Reinicia o contador de tentativas
    numTentativas = 0;

    // Limpa as mensagens anteriores
    document.getElementById('resultado').innerText = '';
    document.getElementById('dica').innerText = '';

    // Limpa o campo de entrada
    document.getElementById('advinhacao').value = '';
}
