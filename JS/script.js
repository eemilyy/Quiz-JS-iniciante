const botaoJogar = document.getElementById('jogar'); //pegando o botao de para iniciar o jogo e armazenado na variavel
const questoesCard = document.getElementById('questoes');

botaoJogar.addEventListener('click', iniciarJogo)

function iniciarJogo() {
    //console.log("ENTROU");
    botaoJogar.classList.add('hide'); //mexendo com o CSS adicionando a classe 'hide'
    questoesCard.classList.remove('hide'); // mexendo com CSS removendo a classe 'hide' 
}
