/*var nome = window.prompt("Qual seu nome");
var idade = window.prompt("Sua idade:");
window.alert(`A ${nome} tem ${idade} anos`);
console.log(nome.length);*/

var clicou = window.document.getElementById('submit'); //pegando o botão do HTML
clicou.addEventListener('click', nomear); //caso o usuário clique, ele chama a função nomear()


function nomear(){
    var nome = window.document.getElementById('nomeJogador').value; //pegando o valor digitado na caixa de texto
    //var nome = String(caixaNome.value);
    //console.log(Number(nome));

    if(!isNaN(nome)){  //verificar pois aceita numeros com letras
        window.alert("Digite apenas letras!");
    }

    var para = window.document.querySelector('#texto'); //criando variável para pegar o p que está no HTML
    para.innerHTML = `Bem vinda ${nome}`; //innerHTML aparece texto
}