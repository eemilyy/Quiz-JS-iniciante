const botaoJogar = document.getElementById('jogar'); //pegando o botao de para iniciar o jogo e armazenado na variavel
const questoesCard = document.getElementById('questoes');
const elementosQuestoes = document.getElementById('questao');
const respostarQuestoes = document.getElementById('botoes-questoes');

botaoJogar.addEventListener('click', iniciarJogo);

function iniciarJogo() {
    //console.log("ENTROU");
    botaoJogar.classList.add('hide'); //mexendo com o CSS adicionando a classe 'hide'
    questoesCard.classList.remove('hide'); // mexendo com CSS removendo a classe 'hide'
    //proxQuestao();
    mostrarQuestao();
}

function proxQuestao() {
    mostrarQuestao(questao[0])
}

function mostrarQuestao() {
    while(questoes[i] != null){
        elementosQuestoes.innerText = questoes[i].questao;
        questoes[i].respostas.forEach(resposta => {
            const botao = document.createElement('button');
            botao.innerText = resposta.texto;
            botao.addEventListener('click', respostaQuestao)
            respostarQuestoes.appendChild(botao)
        } )
        i+=1;
    }
}

function respostaQuestao() {

}

const questoes = [
    {
        questao: "Quanto é 5+5?",
        respostas: [
            { texto: '2', correto: false },
            { texto: '4', correto: false },
            { texto: '10', correto: true },
            { texto: '15', correto: false }
        ]
    },
    {
        questao: "AVL é um(a):",
        respostas: [
            { texto: 'Grafo', correto: false },
            { texto: 'Label', correto: false },
            { texto: 'Site', correto: false },
            { texto: 'Árvore', correto: true }
        ]
    }
]
