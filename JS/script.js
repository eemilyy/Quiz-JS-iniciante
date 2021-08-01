const botaoJogar = document.getElementById('jogar'); //pegando o botao de para iniciar o jogo e armazenado na variavel
const prox = document.getElementById('proximo');
const questoesCard = document.getElementById('questoes');
const elementosQuestoes = document.getElementById('questao');
const respostaQuestoes = document.getElementById('botoes-questoes');
let i = 0

botaoJogar.addEventListener('click', iniciarJogo);
prox.addEventListener('click', () => {
    i++
    proxQuestao()
})

function iniciarJogo() {
    //console.log("ENTROU");
    limpar()
    botaoJogar.classList.add('hide'); //mexendo com o CSS adicionando a classe 'hide'
    questoesCard.classList.remove('hide'); // mexendo com CSS removendo a classe 'hide'
    //proxQuestao();
    mostrarQuestao();
}

function proxQuestao() {
    limpar()
    mostrarQuestao(questao[i])
}

function limpar() {
    prox.classList.add('hide')
    while (respostaQuestoes.firstChild) {
        respostaQuestoes.removeChild(respostaQuestoes.firstChild)
    }
}

function mostrarQuestao() {
    //var i = 0
    //while(questoes[i] != null){
        elementosQuestoes.innerText = questoes[i].questao;
        questoes[i].respostas.forEach(resposta => {
            const botao = document.createElement('button');
            botao.innerText = resposta.texto;
            botao.classList.add('btn')
            if (resposta.correto) {
                botao.dataset.correto = resposta.correto
            } 
            botao.addEventListener('click', respostaQuestao)
            respostaQuestoes.appendChild(botao)
        } )
        //i+=1;
    //}
}

function respostaQuestao(e) {
    const respostaSelecionada = e.target;
    Array.from(respostaQuestoes.children).forEach(button => {
        //setStatusClass(button, button.dataset.correct)
        if(button.dataset.correto){
            button.classList.add('certo')
        }
        else{
            button.classList.add('errado')
        }
    })
    console.log(questoes.length)
    console.log(i)
    if (i < questoes.length - 1) {
        prox.classList.remove('hide')
    }
    else{
        botaoJogar.innerText = 'Jogar novamente'
        botaoJogar.classList.remove('hide')
        i = 0
    }
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
    },
    {
        questao: "Brasil é um:",
        respostas: [
            { texto: 'Continente', correto: false },
            { texto: 'País', correto: true }
        ]
    }
]
